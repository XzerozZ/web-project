'use server'
import prisma from '../utils/prisma';

//localhost:3000/api/favorite
//POST
export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const user = await prisma.user.findUnique({
            where : {
                user_id : parseInt(formData.get('user_id') as string)
            }
        })
        const res = await prisma.restaurant.findUnique({
            where : {
                res_id : parseInt(formData.get('res_id') as string)
            }
        })
        if(user && res){
            const fav = await prisma.favorite.findUnique({
                where : {
                    user_id_res_id : {
                        user_id : user.user_id,
                        res_id : res.res_id
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
        else{
            await prisma.$disconnect();
                return Response.json({
                    message : "Not found user or job"
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