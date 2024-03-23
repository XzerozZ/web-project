'use server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatPhoneNumber } from '../../format/phonenumber';

export async function POST(req : Request){
    const prisma = new PrismaClient();
    try {
        const { username, phone_number, birthday, email, password } = await req.json();
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newuser = await prisma.user.create({
            data : {
                username,
                phone_number : await formatPhoneNumber(phone_number), // 1234567890
                birthday : new Date(birthday), // 1998-03-08
                email,
                password : hashedPassword
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
