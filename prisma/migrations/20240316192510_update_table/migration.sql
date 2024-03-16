/*
  Warnings:

  - You are about to drop the column `clean_rating` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `delicious_rating` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `service_rating` on the `rating` table. All the data in the column will be lost.
  - Added the required column `title` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "rating" DROP COLUMN "clean_rating",
DROP COLUMN "delicious_rating",
DROP COLUMN "service_rating",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "birthday" DATE NOT NULL,
ADD COLUMN     "phone_number" VARCHAR(12) NOT NULL;
