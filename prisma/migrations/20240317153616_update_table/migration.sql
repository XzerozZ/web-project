/*
  Warnings:

  - Made the column `image` on table `blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "blog" ALTER COLUMN "image" SET NOT NULL;
