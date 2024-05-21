'use server'
import prisma from '../utils/prisma';

export async function GET() {
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
