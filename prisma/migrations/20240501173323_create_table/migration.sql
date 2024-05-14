/*
  Warnings:

  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fav_id` on the `favorite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "favorite" DROP CONSTRAINT "favorite_pkey",
DROP COLUMN "fav_id";
