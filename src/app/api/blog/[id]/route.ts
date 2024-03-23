import { PrismaClient } from '@prisma/client';

// localhost:3000/api/blog/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
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

// Delete Blog อันนั้น
export async function DELETE(req : Request,{ params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try{
        const blog = await prisma.blog.delete({
            where : {
                blog_id : parseInt(params.id)
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : "Success"
        })
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