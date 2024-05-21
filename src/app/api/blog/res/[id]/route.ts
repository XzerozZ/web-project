'use server'
import prisma from '../../../utils/prisma';

// localhost:3000/api/blog/res/[id] //blog ของ ร้านอาหารนั้นๆ
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    try {
        const blogbyresId = await prisma.blog.findMany({
            where : {
                res_id : parseInt(params.id)
            },
            include : {
                user : true , 
                restaurant : true ,
            }
        })
        await prisma.$disconnect();
        if (blogbyresId) {
            return Response.json(blogbyresId);
        } else {
            return Response.json({
                message : "Not have any blogs"
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