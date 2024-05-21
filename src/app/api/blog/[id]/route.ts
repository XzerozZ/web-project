'use server'
import prisma from '../../utils/prisma';

// localhost:3000/api/blog/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    try {
        const blog = await prisma.blog.findUnique({
            where : {
                blog_id : parseInt(params.id)
            },
            include : {
                user : true,
                restaurant : true
            }
        })
        await prisma.$disconnect();
        if (blog) {
            return Response.json(blog);
        } else {
            return Response.json({
                message : "Didn't found this Blog"
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
