import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "foo@bar.baz",
    },
    update: {},
    create: {
      name: "Test",
      email: "foo@bar.baz",
      memberNumber: 1337,
      type: "MEMBER",
      briefed: true,
      discount: false,
    },
  });

  const product = await prisma.product.upsert({
    where: {
      baseProductId: 1000,
    },
    update: {},
    create: {
      name: "Fee",
      price: 1000,
      active: true,
      description: "The fee you pay",
      baseProductId: 1000,
    },
  });

  const record = await prisma.record.create({
    data: {
      date: new Date(),
      user: {
        connect: {
          userId: user.userId,
        },
      },
    },
  });

  const recordProduct = await prisma.recordProduct.create({
    data: {
      product: {
        connect: { productId: product.productId },
      },
      record: {
        connect: { recordId: record.recordId },
      },
      quantity: 1,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
