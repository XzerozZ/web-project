'use server'
import prisma from '../utils/prisma';

export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const newcategory = await prisma.res_type.create({
            data : {
                res_id : parseInt(formData.get('res_id') as string),
                category_id : parseInt(formData.get('category_id') as string),
            }
        })
        await prisma.$disconnect();
        return Response.json(newcategory)
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

export async function DELETE( req : Request ) {
    try { 
        const formData = await req.formData();
        await prisma.res_type.delete({
            where : {
                res_id_category_id :{
                    res_id : parseInt(formData.get('res_id') as string),
                    category_id : parseInt(formData.get('category_id') as string),
                }
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete Category Successfully",
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

