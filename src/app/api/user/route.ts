'use server'
import prisma from '../utils/prisma';
import bcrypt from 'bcrypt';
import { formatPhoneNumber } from '../format/phonenumber';
import { upLoadIMG } from '../admin/supa';

export async function POST(req : Request){
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
        if (formData.has('username')) {
            const username = formData.get('username') as string;
            if (username.trim() !== '') {
                existingUser.username = username;
            }
        }
        if (formData.has('phone_number')) {
            const phoneNumber = formData.get('phone_number') as string;
            if (phoneNumber.trim() !== '') {
                existingUser.phone_number = await formatPhoneNumber(phoneNumber);
            }
        }
        if (formData.has('password')) {
            const password = formData.get('password') as string;
            if (password.trim() !== '') {
                const hashedPassword = bcrypt.hashSync(password, 10);
                existingUser.password = hashedPassword;
            }
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            const imageFile = formData.get('image') as File;
            if (imageFile.size > 0) {
                existingUser.image = await upLoadIMG(imageFile);
            }
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