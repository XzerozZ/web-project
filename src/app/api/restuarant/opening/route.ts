'use server'
import { PrismaClient } from '@prisma/client';

export async function DELETE( req : Request ) {
    const prisma = new PrismaClient();
    try { 
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        await prisma.openingHours.delete({
            where : {
                open_id : id
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete Successfully",
        })
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