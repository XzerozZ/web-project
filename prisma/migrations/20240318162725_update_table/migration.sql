/*
  Warnings:

  - You are about to drop the column `image_background` on the `restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "restaurant" DROP COLUMN "image_background",
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
