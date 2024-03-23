'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const newcom = await prisma.comment.create({
            data : {
                user_id : parseInt(formData.get('user_id') as string),
                res_id : parseInt(formData.get('res_id') as string),
                description : formData.get('description') as string
            }
        })
        await prisma.$disconnect();
        return Response.json(newcom)
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