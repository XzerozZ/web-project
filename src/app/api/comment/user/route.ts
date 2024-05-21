'use server'
import prisma from '../../utils/prisma';

// localhost:3000/api/comment/user // ดูคอมเม้นของuserว่าเคยเม้นอะไรบ้าง
export async function POST(req : Request){
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