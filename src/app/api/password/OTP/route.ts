'use server'
import prisma from "../../utils/prisma";

export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const OTP = formData.get('OTP') as string
        if (OTP.length === 6) {
            const check = await prisma.oTP.findUnique({
                where : {
                    OTP : OTP
                }
            })
            if(check){
                await prisma.oTP.deleteMany({
                    where : {
                        OTP : OTP
                    }
                })
                return Response.json("Success")
            }
            else {
                return Response.json("Try again")
            }
        }
        else {
            return Response.json("Try again")
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