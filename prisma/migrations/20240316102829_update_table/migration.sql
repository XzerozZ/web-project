/*
  Warnings:

  - You are about to drop the column `admin_id` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "restaurant" DROP CONSTRAINT "restaurant_admin_id_fkey";

-- AlterTable
ALTER TABLE "restaurant" DROP COLUMN "admin_id";

-- DropTable
DROP TABLE "admin";
