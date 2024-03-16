'use server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export async function POST(req : Request){
    const prisma = new PrismaClient();
    try {
        const { username, email, password } = await req.json();
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newuser = await prisma.user.create({
            data : {
                username,
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
            {error}, {status:500}
        )
    }
}