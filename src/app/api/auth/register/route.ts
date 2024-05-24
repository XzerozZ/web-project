'use server'
import bcrypt from 'bcrypt';
import prisma from '../../utils/prisma';
import { formatPhoneNumber } from '../../format/phonenumber';
import { upLoadIMG } from '../../admin/supa';

export async function POST(req : Request){
    try {
        const formData = await req.formData();
        let image: string | null = null;
        const email = formData.get('email') as string
        for await (const [name,value] of formData.entries()){
            if(name === 'image' && value instanceof File){
               image = await upLoadIMG(value); 
            }
            else if (name === 'phone_number'){
                const formattedPhoneNumber = await formatPhoneNumber(value as string);
                formData.set(name, formattedPhoneNumber);
            }
            else if (name === 'birthday'){
                const date = new Date(value as string);
                const dateString = date.toISOString();
                formData.set(name, dateString);
            }
            else if (name === 'password'){
                const hashedPassword = bcrypt.hashSync(value as string, 10)
                formData.set(name, hashedPassword);
            }
        }
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(!user){
            const newuser = await prisma.user.create({
                data : {
                    username: formData.get('username') as string,
                    image : image,
                    phone_number : formData.get('phone_number') as string, // 1234567890
                    birthday : formData.get('birthday') as string, // 1998-03-08
                    email : email,
                    password : formData.get('password') as string,
                    role : formData.get('role') as string,
                }
            })  
            await prisma.$disconnect();
            return Response.json({
                message : " Created Account Successfully",
                data : {
                    newuser
                }
            })
        }        
        else{
            await prisma.$disconnect();
            return Response.json({
                message : "Not found this user"
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return Response.json(
            {
                error
            }, 
            {
                status : 500
            }
        )
    }
}
