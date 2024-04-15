'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const newrating = await prisma.rating.create({
            data : {
                user_id : parseInt(formData.get('user_id') as string),
                res_id : parseInt(formData.get('res_id') as string),
                rating : parseFloat(formData.get('rating') as string)
            }
        })
        await prisma.$disconnect();
        return Response.json(newrating)
    }
    catch(error){
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