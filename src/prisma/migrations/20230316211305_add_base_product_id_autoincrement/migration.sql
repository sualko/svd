-- DropForeignKey
ALTER TABLE "record_product" DROP CONSTRAINT "record_product_record_id_fkey";

-- AlterTable
CREATE SEQUENCE product_base_product_id_seq;
ALTER TABLE "product" ALTER COLUMN "base_product_id" SET DEFAULT nextval('product_base_product_id_seq');
ALTER SEQUENCE product_base_product_id_seq OWNED BY "product"."base_product_id";

-- AddForeignKey
ALTER TABLE "record_product" ADD CONSTRAINT "record_product_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "record"("record_id") ON DELETE CASCADE ON UPDATE CASCADE;
