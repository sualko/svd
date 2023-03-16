-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('GUEST', 'MEMBER');

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "member_number" INTEGER NOT NULL,
    "type" "UserType" NOT NULL,
    "discount" BOOLEAN NOT NULL,
    "briefed" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "product" (
    "product_id" SERIAL NOT NULL,
    "base_product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "record" (
    "record_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "record_pkey" PRIMARY KEY ("record_id")
);

-- CreateTable
CREATE TABLE "record_product" (
    "record_id" INTEGER NOT NULL,
    "quantity_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "record_product_pkey" PRIMARY KEY ("record_id","quantity_id")
);

-- CreateTable
CREATE TABLE "rule" (
    "rule_id" SERIAL NOT NULL,
    "trigger_base_product_id" INTEGER NOT NULL,
    "resolved_base_product_id" INTEGER NOT NULL,
    "type" "UserType" NOT NULL,
    "discount" BOOLEAN NOT NULL,

    CONSTRAINT "rule_pkey" PRIMARY KEY ("rule_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_base_product_id_key" ON "product"("base_product_id");

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "record_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_product" ADD CONSTRAINT "record_product_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "record"("record_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "record_product" ADD CONSTRAINT "record_product_quantity_id_fkey" FOREIGN KEY ("quantity_id") REFERENCES "product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rule" ADD CONSTRAINT "rule_trigger_base_product_id_fkey" FOREIGN KEY ("trigger_base_product_id") REFERENCES "product"("base_product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rule" ADD CONSTRAINT "rule_resolved_base_product_id_fkey" FOREIGN KEY ("resolved_base_product_id") REFERENCES "product"("base_product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
