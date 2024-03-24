import { PrismaClient } from '@prisma/client';
import { upLoadIMG } from '../admin/supa';
// localhost:3000/api/comment

//POST
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

//GET
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

//PUT
export async function PUT( req : Request ){
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        const existingBlog = await prisma.blog.findUnique({
            where: {
                blog_id: id
            },
        });
        if (!existingBlog) {
            return Response.json({
                message: "Blog not found"
            });
        }
        if (formData.has('title')) {
            existingBlog.title = formData.get('title') as string;
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            existingBlog.image = await upLoadIMG(formData.get('image') as File);
        }
        if (formData.has('description')) {
            existingBlog.description = formData.get('description') as string;
        }
        const updatedBlog = await prisma.blog.update({
            where : {
                blog_id : existingBlog.blog_id
            },
            data : existingBlog,
            include : {
                user : true , 
                restaurant : true 
            }
        })
        await prisma.$disconnect();
        return Response.json(updatedBlog);
    } 
    catch(error){
        await prisma.$disconnect();
        console.log(error)
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
export async function DELETE( req : Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        await prisma.blog.delete({
            where : {
                blog_id : id
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete Blog Successfully",
        })
    }
    catch(error){
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