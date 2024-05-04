'use server'
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { formatPhoneNumber } from '../format/phonenumber';
import { upLoadIMG } from '../admin/supa';



export async function POST(req : Request){
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const user  = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        await prisma.$disconnect();
        return Response.json(
            user
        )
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "User Not Found"
            }),
            {
                status: 404
            }
        );
    }
}

export async function PUT( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const existingUser = await prisma.user.findUnique({
            where : {
                user_id : id
            }
        });
        if (!existingUser) {
            return Response.json({
                message : "User not found"
            })
        }
        if(formData.has('username')) {
            existingUser.username = formData.get('username') as string;
        }
        if(formData.has("phone_number")) {
            const phoneNumber = formData.get('phone_number') as string;
            existingUser.phone_number = await formatPhoneNumber(phoneNumber)
        }
        if(formData.has('password')) {
            const Password = formData.get('password') as string
            const hashedPassword = bcrypt.hashSync(Password, 10)
            existingUser.password = hashedPassword
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            existingUser.image = await upLoadIMG(formData.get('image') as File);
        }

        const updatedUser = await prisma.user.update({
            where : {
                user_id : existingUser.user_id
            },
            data : existingUser,
        });
        await prisma.$disconnect();
        return Response.json(updatedUser)
    }
    catch (error) {
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