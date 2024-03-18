import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const { user_id, res_id, title, image, description } = await req.json();
        const newblog = await prisma.blog.create({
            data : {
                user_id,
                res_id,
                title,
                image,
                description
            }
        })
        await prisma.$disconnect();
        return Response.json(newblog)
    }
    catch(error) {
        await prisma.$disconnect();
        return Response.json(
            {
                error
            }, 
            {
                status : 500
            }
        )
    }
}

export async function DELETE() {
    const prisma = new PrismaClient();
    await prisma.blog.deleteMany({})
    await prisma.$disconnect();
    return Response.json({
        message : " Delete Blog Successfully",
    })
}