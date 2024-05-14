-- CreateTable
CREATE TABLE "OTP" (
    "otp_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "OTP" VARCHAR(6) NOT NULL,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("otp_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OTP_OTP_key" ON "OTP"("OTP");

-- AddForeignKey
ALTER TABLE "OTP" ADD CONSTRAINT "OTP_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
