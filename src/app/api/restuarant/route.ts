import { PrismaClient } from '@prisma/client';

export async function POST(req: Request){
    const prisma = new PrismaClient();
    try{
        const { name, phone_number, address, description, categories, openingHours} = await req.json()
        const categoryIds : number[] = [];
        for ( const categoryName of categories ) {
            let category = await prisma.category.findFirst({
                where : {
                    name : categoryName
                }
            });
            if (!category) {
                category = await prisma.category.create({
                    data : {
                        name : categoryName
                    }
                });
            }
            categoryIds.push(category.category_id);
        }
        const newres = await prisma.restaurant.create({
            data : {
                name,
                phone_number,
                address,
                description,
                res_type : {
                    create : categoryIds.map(category_id => ({
                        category : {
                            connect : {
                                category_id
                            }
                        }
                    }))
                },
                res_op : {
                    create: openingHours.map((openingHour: { day_of_week: String; opening_time: String; closing_time: String; }) => ({
                        openingHours: {
                            create: {
                                day_of_week: openingHour.day_of_week,
                                opening_time: openingHour.opening_time,
                                closing_time: openingHour.closing_time
                            }
                        }
                    }))
                }
            },
            include : {
                res_type : true,
                res_op : {
                    include : {
                        openingHours : true
                    }
                }
            },
        });
        await prisma.$disconnect();
        return Response.json(newres)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
          error
        }, {status:500})
    }
}
// localhost:3000/api/restuarant
export async function GET() {
    const prisma = new PrismaClient();
    try {
        const res = await prisma.restaurant.findMany({
            include : {
                res_type : {
                    include: {
                        category: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });
        await prisma.$disconnect();
        return Response.json(res)
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