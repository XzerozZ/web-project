import { PrismaClient } from '@prisma/client';

interface RatingCounts {
    [key: number]: number;
  }
// localhost:3000/api/restuarant/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const resId = await prisma.restaurant.findUnique({
            where : {
                res_id : parseInt(params.id)
            },
            include : {
                res_type : {
                    include : {
                        category : true
                    }
                },
                res_op : {
                    include : {
                        openingHours : true
                    }
                },
                comment : true
            }
        })
        await prisma.$disconnect();
        if (resId) {
            const categories = resId.res_type.map(type => type.category.name);
            const ratings = resId.comment.map(r => r.rating);
            const openingHours = resId.res_op.map(op => `${op.openingHours.day_of_week}: ${op.openingHours.opening_time}-${op.openingHours.closing_time}`);
            const ratingCounts: RatingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            ratings.forEach((rating) => {
                ratingCounts[rating]++;
              });
            const resWithData = { 
                ...resId , 
                categories , 
                openingHours , 
                ratingCounts
            };
            return Response.json(resWithData);
        } else {
            return Response.json({
                message : "Didn't found this restaurant"
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return  Response.json(
            {
                error : "Server Error"
            }, 
            {
                status : 500
            }
        )
    }
}
