import { PrismaClient } from '@prisma/client';

// localhost:3000/api/user/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try{
        const userid = await prisma.user.findUnique({
            where: {
                user_id: parseInt(params.id)
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