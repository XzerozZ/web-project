'use server'
import { PrismaClient } from '@prisma/client';

// localhost:3000/api/favorite/user/[id] //fav ของuser
//GET
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const userfav = await prisma.favorite.findMany({
            where : {
                user_id : parseInt(params.id)
            },
            include : {
                user : true ,
                restaurant : true
            }
        })
        await prisma.$disconnect();
        if(userfav) {
            return Response.json(userfav)
        } else {
            return Response.json({
                message : "Not have any your favorite Restuarant(s)"
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return  Response.json(
            {
                error : "Server Error"
            }, 
            {
                status : 500
            }
        )
    }
}