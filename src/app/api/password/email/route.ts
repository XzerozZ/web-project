import { PrismaClient } from "@prisma/client";
import { randomMath } from "./random";
import { sentEmail } from "./sendemail";
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(user){
            const OTP = `${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}`
            const record = await prisma.oTP.create({
                data : {
                    user_id : user?.user_id,
                    OTP : OTP
                }
            });
            const sendEmail  = await sentEmail(user?.email,OTP)
            if(sendEmail){
                return Response.json("Email sent")
            } else {
                return Response.json("Failed to sent Email")
            }
        }
    }
    catch(error){
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