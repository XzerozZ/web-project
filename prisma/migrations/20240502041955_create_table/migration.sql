/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `restaurant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "restaurant_name_key" ON "restaurant"("name");
