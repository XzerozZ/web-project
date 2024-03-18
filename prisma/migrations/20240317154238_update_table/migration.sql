/*
  Warnings:

  - You are about to drop the column `image_profile` on the `restaurant` table. All the data in the column will be lost.
  - Added the required column `image` to the `restaurant` table without a default value. This is not possible if the table is not empty.
  - Made the column `image_background` on table `restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "restaurant" DROP COLUMN "image_profile",
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "image_background" SET NOT NULL;
