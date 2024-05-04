import { PrismaClient } from '@prisma/client';

// localhost:3000/api/blog/res/[id] //blog ที่userโพสต์
// GET
export async function GET(req : Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const user  = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        const blogbyuserId = await prisma.blog.findMany({
            where : {
                user_id : user?.user_id
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