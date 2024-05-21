'use server'
import prisma from '../../utils/prisma';

export async function DELETE( req : Request ) {
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