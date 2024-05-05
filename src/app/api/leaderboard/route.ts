'use server'
import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    try {
        const restaurants = await prisma.restaurant.findMany({
            include: {
                res_type: {
                    include: {
                        category: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
            },
            orderBy : {
                averageRating : 'desc'
            }
        });

        await prisma.$disconnect();
        return Response.json(
            restaurants,
        );
    } catch (error) {
        await prisma.$disconnect();
        return Response.json({
            error
        }, {
            status: 500
        });
    }
}
