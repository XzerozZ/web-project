import { PrismaClient } from '@prisma/client';

// localhost:3000/api/comment/res/[id] // ดูคอมเม้นของร้านค้านั้นๆ
export async function GET(req : Request,{params} : {params : { id : string}}){
    const prisma = new PrismaClient();
    try{
        const commentofres = await prisma.comment.findMany({
            where : {
                res_id : parseInt(params.id)
            },
            include : {
                user : {
                    include : {
                        rating : true
                    }
                } ,
                restaurant : true
            }
        })
        await prisma.$disconnect();
        if (commentofres) {
            return Response.json(commentofres);
        } else {
            return Response.json({
                message : "Not have any comments now"
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