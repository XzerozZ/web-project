-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "image" TEXT,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "restaurant" (
    "res_id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image_profile" TEXT,
    "image_background" TEXT,
    "phone_number" VARCHAR(12) NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "restaurant_pkey" PRIMARY KEY ("res_id")
);

-- CreateTable
CREATE TABLE "res_op" (
    "res_id" INTEGER NOT NULL,
    "open_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "openingHours" (
    "open_id" SERIAL NOT NULL,
    "day_of_week" TEXT NOT NULL,
    "opening_time" VARCHAR(5) NOT NULL,
    "closing_time" VARCHAR(5) NOT NULL,

    CONSTRAINT "openingHours_pkey" PRIMARY KEY ("open_id")
);

-- CreateTable
CREATE TABLE "blog" (
    "blog_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "res_id" INTEGER NOT NULL,
    "image" TEXT,
    "description" TEXT NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("blog_id")
);

-- CreateTable
CREATE TABLE "comment" (
    "comment_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "res_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "posted_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "rating" (
    "rating_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "res_id" INTEGER NOT NULL,
    "clean_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "delicious_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "service_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "favorite" (
    "user_id" INTEGER NOT NULL,
    "res_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "res_op_res_id_open_id_key" ON "res_op"("res_id", "open_id");

-- CreateIndex
CREATE UNIQUE INDEX "favorite_user_id_res_id_key" ON "favorite"("user_id", "res_id");

-- AddForeignKey
ALTER TABLE "res_op" ADD CONSTRAINT "res_op_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "res_op" ADD CONSTRAINT "res_op_open_id_fkey" FOREIGN KEY ("open_id") REFERENCES "openingHours"("open_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "restaurant"("res_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
