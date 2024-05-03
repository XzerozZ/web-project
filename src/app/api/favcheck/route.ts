import { PrismaClient } from '@prisma/client';
import e from 'express';

//localhost:3000/api/favorite
//POST
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const fav = await prisma.favorite.findUnique({
            where : {
                user_id_res_id : {
                    user_id : parseInt(formData.get('user_id') as string),
                    res_id : parseInt(formData.get('res_id') as string)
                }
            }
        })
        if(fav){
            await prisma.$disconnect();
            return Response.json({
                message : "Already Added"
            })
        } else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not Added"
            })
        }
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