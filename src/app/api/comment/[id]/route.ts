import { PrismaClient } from '@prisma/client';

// localhost:3000/api/comment/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const commentId = await prisma.comment.findUnique({
            where : {
                comment_id : parseInt(params.id)
            },
            include : {
                user : true , 
                restaurant : true
            }
        })
        await prisma.$disconnect();
        if (commentId) {
            return Response.json(commentId);
        } else {
            return Response.json({
                message : "Didn't found this comment"
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