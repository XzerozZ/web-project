import { PrismaClient } from '@prisma/client';

export async function POST(req: Request){
    const prisma = new PrismaClient();
    try{
        const { name, phone_number, address, description, categories } = await req.json()
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
                }
            },
            include : {
                res_type : true
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