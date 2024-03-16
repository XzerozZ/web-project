-- CreateTable
CREATE TABLE "res_type" (
    "res_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "res_type_res_id_category_id_key" ON "res_type"("res_id", "category_id");

-- AddForeignKey
ALTER TABLE "res_type" ADD CONSTRAINT "res_type_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "res_type" ADD CONSTRAINT "res_type_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
