-- AlterTable
ALTER TABLE "favorite" ADD COLUMN     "fav_id" SERIAL NOT NULL,
ADD CONSTRAINT "favorite_pkey" PRIMARY KEY ("fav_id");
