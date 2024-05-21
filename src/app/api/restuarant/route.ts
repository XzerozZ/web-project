'use server'
import prisma from '../utils/prisma';
import { formatPhoneNumber } from '../format/phonenumber';
import { upLoadIMG } from '../admin/supa';

//localhost:3000/api/restuarant
//POST
export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        let image: string | null = null;
        let imageBackground: string | null = null;
        const categoryIds: number[] = [];
        const week: string[] = [];
        const opening: string[] = [];
        const closing: string[] = [];

        for await (const [name, value] of formData.entries()) {
            if (name === 'image' && value instanceof File) {
                image = await upLoadIMG(value);
            } else if (name === 'image_background' && value instanceof File) {
                imageBackground = await upLoadIMG(value);
            } else if (name === 'category') {
                const categoryName = value as string;
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
            } else if (name === 'day_of_week'){
                week.push(value as string)
            } else if (name === 'opening_time'){
                opening.push(value as string)
            } else if (name === 'closing_time'){
                closing.push(value as string)
            }
        }

        const openingHoursData = week.map((day, index) => ({
            day_of_week: day,
            opening_time: opening[index],
            closing_time: closing[index]
        }));

        const newRestaurant = await prisma.restaurant.create({
            data: {
                name: formData.get('name') as string,
                phone_number: formData.get('phone_number') as string,
                address: formData.get('address') as string,
                description: formData.get('description') as string,
                image: image,
                image_background: imageBackground,
                res_type: {
                    create: categoryIds.map(category_id => ({
                        category_id
                    }))
                },
                res_op: {
                    create: openingHoursData.map(openingHours => ({
                        openingHours: {
                            create: openingHours
                        }
                    }))
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
        return Response.json(newRestaurant);
    } catch (error) {
        await prisma.$disconnect();
        return Response.json({ error: "error" });
    }
}

  
//GET
export async function GET() {
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
                },
                comment : true
            }
        });

        await prisma.$disconnect();
        return Response.json(
            res
        )
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

//PUT(UPDATE/EDIT)
export async function PUT(req: Request) {
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        const existingRestaurant = await prisma.restaurant.findUnique({
            where: {
                res_id: id
            },
        });

        if (!existingRestaurant) {
            return Response.json({
                message: "Restaurant not found"
            });
        }

        if (formData.has('name')) {
            const name = formData.get('name') as string;
            if (name.trim() !== '') {
                existingRestaurant.name = name;
            }
        }
        if (formData.has('phone_number')) {
            const phoneNumber = formData.get('phone_number') as string;
            if (phoneNumber.trim() !== '') {
                existingRestaurant.phone_number = await formatPhoneNumber(phoneNumber);
            }
        }
        if (formData.has('address')) {
            const address = formData.get('address') as string;
            if (address.trim() !== '') {
                existingRestaurant.address = address;
            }
        }
        if (formData.has('description')) {
            const description = formData.get('description') as string;
            if (description.trim() !== '') {
                existingRestaurant.description = description;
            }
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            const imageFile = formData.get('image') as File;
            if (imageFile.size > 0) {
                existingRestaurant.image = await upLoadIMG(imageFile);
            }
        }
        if (formData.has('image_background') && formData.get('image_background') instanceof File) {
            const backgroundImageFile = formData.get('image_background') as File;
            if (backgroundImageFile.size > 0) {
                existingRestaurant.image_background = await upLoadIMG(backgroundImageFile);
            }
        }        

        const updatedRestaurant = await prisma.restaurant.update({
            where: {
                res_id: existingRestaurant.res_id
            },
            data: existingRestaurant,
            include : {
                res_op : {
                    include : {
                        openingHours : true
                    }
                } , 
                res_type : {
                    include : {
                        category : true
                    }
                } , 
            }
        });

        await prisma.$disconnect();
        return Response.json(updatedRestaurant);
    } catch (error) {
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}

//DELETE
export async function DELETE(req: Request) {
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        const resOps = await prisma.res_op.findMany({
            where: {
                res_id: id
            },
            select: {
                open_id: true
            }
        });

        if (!resOps || resOps.length === 0) {
            return Response.json({
                error: "No associated res_op records found for the provided restaurant ID",
            }, {
                status: 404
            });
        }

        const openIds = resOps.map(resOp => resOp.open_id);

        await prisma.$transaction([
            prisma.res_type.deleteMany({
                where: {
                    res_id: id
                }
            }),
            prisma.res_op.deleteMany({
                where: {
                    res_id: id
                }
            }),
            prisma.openingHours.deleteMany({
                where: {
                    open_id: {
                        in: openIds
                    }
                },
            }),
            prisma.blog.deleteMany({
                where: {
                    res_id : id
                }
            }),
            prisma.comment.deleteMany({
                where : {
                    res_id : id
                }
            }),
            prisma.favorite.deleteMany({
                where : {
                    res_id : id
                }
            }),
            prisma.restaurant.delete({
                where: {
                    res_id: id
                }
            })
        ]);

        await prisma.$disconnect();
        return Response.json({
            message: "Delete Restaurant Successfully",
        });
    } catch (error) {
        await prisma.$disconnect();
        console.log(error);
        return Response.json(
            {
            error: "Server Error"
            }, {
            status: 500
            }
        );
    }
}


