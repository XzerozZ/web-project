'use server'
import { PrismaClient } from '@prisma/client';

// localhost:3000/api/favorite/user //fav ของuser
//GET
export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const user  = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        const userfav = await prisma.favorite.findMany({
            where : {
                user_id : user?.user_id
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