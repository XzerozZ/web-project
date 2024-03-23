import { PrismaClient } from '@prisma/client';

// localhost:3000/api/comment/user/[id] // ดูคอมเม้นของuserว่าเคยเม้นอะไรบ้าง
export async function GET(req : Request,{params} : {params : { id : string}}){
    const prisma = new PrismaClient();
    try{
        const commentofuser = await prisma.comment.findMany({
            where : {
                user_id : parseInt(params.id)
            },
            include : {
                user : true ,
                restaurant : true
            }
        })
        await prisma.$disconnect();
        if (commentofuser) {
            return Response.json(commentofuser);
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