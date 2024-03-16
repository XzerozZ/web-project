import { PrismaClient } from '@prisma/client';

export async function DELETE() {
    const prisma = new PrismaClient();
    const deleteUsers = await prisma.user.deleteMany({})
    await prisma.$disconnect();
    return Response.json({
        message : " Delete Account Successfully",
    })
}