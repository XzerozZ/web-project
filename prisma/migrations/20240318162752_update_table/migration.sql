/*
  Warnings:

  - Made the column `phone_number` on table `restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "restaurant" ADD COLUMN     "image_background" TEXT,
ALTER COLUMN "phone_number" SET NOT NULL;
