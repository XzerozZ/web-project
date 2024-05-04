import { PrismaClient } from '@prisma/client';

// localhost:3000/api/comment/user/[id] // ดูคอมเม้นของuserว่าเคยเม้นอะไรบ้าง
export async function GET(req : Request){
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const user  = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        const commentofuser = await prisma.comment.findMany({
            where : {
                user_id : user?.user_id
            },
            include : {
                user : true,
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