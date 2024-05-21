'use server'
import prisma from '../../utils/prisma';
import bcrypt from 'bcrypt';

export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const emailUser = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(emailUser){
            if (formData.has('password')) {
                if (password.trim() !== '') {
                    const hashedPassword = bcrypt.hashSync(password, 10);
                    emailUser.password = hashedPassword;
                }
            }
            const changePassword = await prisma.user.update({
                where : {
                    user_id : emailUser.user_id
                },
                data : emailUser
            })
            return Response.json(changePassword)
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}