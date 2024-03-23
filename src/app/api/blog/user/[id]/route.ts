import { PrismaClient } from '@prisma/client';

// localhost:3000/api/blog/res/[id] //blog ที่userโพสต์
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const blogbyuserId = await prisma.blog.findMany({
            where : {
                user_id : parseInt(params.id)
            },
            include : {
                user : true , 
                restaurant : true ,
            }
        })
        await prisma.$disconnect();
        if (blogbyuserId) {
            return Response.json(blogbyuserId);
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