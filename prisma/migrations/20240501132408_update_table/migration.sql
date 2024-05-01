/*
  Warnings:

  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_res_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_user_id_fkey";

-- AlterTable
ALTER TABLE "comment" ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "rating";
