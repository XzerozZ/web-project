'use server'
import prisma from '../../utils/prisma';

// localhost:3000/api/user/[id]
export async function GET(req : Request,{ params }: { params: { email: string } }){
    try{
        const userid = await prisma.user.findUnique({
            where: {
                email: params.email
            },
        });
        await prisma.$disconnect();
        return Response.json(
            userid
        )
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "User Not Found"
            }),
            {
                status: 404
            }
        );
    }
}