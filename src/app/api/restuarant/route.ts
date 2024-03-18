import { PrismaClient } from '@prisma/client';
import { formatPhoneNumber } from '../format/phonenumber';
import { upLoadIMG } from '../admin/supa';

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        let image: string | null = null;
        let imageBackground: string | null = null;
        const categoryIds: number[] = [];

        for await (const [name, value] of formData.entries()) {
            if (name === 'image' && value instanceof File) {
                image = await upLoadIMG(value);
            } else if (name === 'image_background' && value instanceof File) {
                imageBackground = await upLoadIMG(value);
            } else if (name === 'categories') {
                const categoryName = value as string; // Assuming a single string value for categories
                let category = await prisma.category.findFirst({
                    where: {
                        name: categoryName
                    }
                });
                if (!category) {
                    category = await prisma.category.create({
                        data: {
                            name: categoryName
                        }
                    });
                }
                categoryIds.push(category.category_id);
            } else if (name === 'phone_number'){
                const formattedPhoneNumber = await formatPhoneNumber(value as string);
                formData.set(name, formattedPhoneNumber);
            }
        }

        const dayOfWeek = formData.get('day_of_week') as unknown as string[];
        const openingTime = formData.get('opening_time') as unknown as string[];
        const closingTime = formData.get('closing_time') as unknown as string[];

        const resOpCreate = dayOfWeek.map((day, index) => ({
            openingHours: {
                create: {
                    day_of_week: day,
                    opening_time: openingTime[index],
                    closing_time: closingTime[index]
                }
            }
        }));

        const newres = await prisma.restaurant.create({
            data: {
                name: formData.get('name') as string,
                phone_number: formData.get('phone_number') as string,
                address: formData.get('address') as string,
                description: formData.get('description') as string,
                image: image,
                image_background: imageBackground,
                res_type: {
                    create: categoryIds.map(category_id => ({
                        category: {
                            connect: {
                                category_id
                            }
                        }
                    }))
                },
                res_op: {
                    create: resOpCreate
                }
            },
            include: {
                res_type: true,
                res_op: {
                    include: {
                        openingHours: true
                    }
                }
            }
        });
      await prisma.$disconnect();
      return Response.json(newres);
    } catch (error) {
      await prisma.$disconnect();
      return Response.json({ error: error });
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
