'use server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatPhoneNumber } from '../../format/phonenumber';
import { upLoadIMG } from '../../admin/supa';

export async function POST(req : Request){
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        let image: string | null = null;
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
        const newuser = await prisma.user.create({
            data : {
                username: formData.get('username') as string,
                phone_number : formData.get('phone_number') as string, // 1234567890
                birthday : formData.get('birthday') as string, // 1998-03-08
                email : formData.get('email') as string,
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
