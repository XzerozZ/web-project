'use server'
import prisma from '../utils/prisma';

//localhost:3000/api/comment
//POST
export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const userId = parseInt(formData.get('user_id') as string);
        const resId = parseInt(formData.get('res_id') as string);
        const description = formData.get('description') as string;
        const rating = parseInt(formData.get('rating') as string);
        const newcom = await prisma.comment.create({
            data : {
                user_id: userId,
                res_id: resId,
                description: description,
                rating: rating
            }
        })
        const comments = await prisma.comment.findMany({
            where: { 
                res_id: resId 
            }
        });
        const totalRating = comments.reduce((acc, curr) => acc + curr.rating, 0);
        const averageRating = totalRating / comments.length;
        await prisma.restaurant.update({
            where: { 
                res_id: resId 
            },
            data: { 
                averageRating: averageRating 
            }
        });
        await prisma.$disconnect();
        return Response.json(newcom)
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

//PUT(UPDATE/EDIT)
export async function PUT( req : Request ) {
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        const existingComment = await prisma.comment.findUnique({
            where: {
                comment_id: id
            },
        });
        if (!existingComment) {
            return Response.json({
                message: "Comment not found"
            });
        }
        if (formData.has('description')) {
            existingComment.description = formData.get('description') as string;
        } 
        const updatedComment = await prisma.comment.update({
            where : {
                comment_id : existingComment.comment_id
            },
            data : existingComment,
            include : {
                user : true , 
                restaurant : true
            }
        })
        await prisma.$disconnect();
        return Response.json(updatedComment)
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

//DELETE
export async function DELETE( req : Request ) {
    try { 
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string);
        await prisma.comment.delete({
            where : {
                comment_id : id
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete Comment Successfully",
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