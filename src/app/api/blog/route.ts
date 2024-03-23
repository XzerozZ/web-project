import { PrismaClient } from '@prisma/client';
import { upLoadIMG } from '../admin/supa';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        let image: string | null = null;
        for await (const [name , value] of formData.entries()){
            if (name === 'image' && value instanceof File) {
                image = await upLoadIMG(value);
            }
        }
        const newblog = await prisma.blog.create({
            data : {
                user_id: parseInt(formData.get('user_id') as string),
                res_id: parseInt(formData.get('res_id') as string),
                title: formData.get('title') as string,
                image: image,
                description: formData.get('description') as string
            }
        })
        await prisma.$disconnect();
        return Response.json(newblog)
    }
    catch(error) {
        await prisma.$disconnect();
        console.log(error)
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

export async function GET() {
    const prisma = new PrismaClient();
    try {
        const blogs = await prisma.blog.findMany()
        await prisma.$disconnect();
        return Response.json(blogs)
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
/*export async function DELETE() {
    const prisma = new PrismaClient();
    await prisma.blog.deleteMany({})
    await prisma.$disconnect();
    return Response.json({
        message : " Delete Blog Successfully",
    })
}*/