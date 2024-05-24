'use server'
import prisma from '../../utils/prisma';

// localhost:3000/api/favorite/user //fav ของuser
//GET
export async function POST(req : Request) {
    try {
        const formData = await req.formData();
        const user  = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        if(user){
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
        else{
            await prisma.$disconnect();
            return Response.json({
                message : "Not found this user"
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