'use server'
import prisma from '../utils/prisma';

//localhost:3000/api/favorite
//POST
export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const fav = await prisma.favorite.create({
            data : {
                user_id : parseInt(formData.get('user_id') as string),
                res_id : parseInt(formData.get('res_id') as string)
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : "Favorite Added"
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

export async function DELETE( req : Request ) {
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        await prisma.favorite.delete({
            where : {
                user_id_res_id : {
                    user_id : parseInt(formData.get('user_id') as string),
                    res_id : parseInt(formData.get('res_id') as string)
                }
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete Favorite Restuarant Successfully",
        })
    }
    catch(error){
        await prisma.$disconnect();
        console.log(error)
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