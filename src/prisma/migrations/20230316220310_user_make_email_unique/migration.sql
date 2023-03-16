/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "product" ALTER COLUMN "base_product_id" DROP DEFAULT;
DROP SEQUENCE "product_base_product_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
