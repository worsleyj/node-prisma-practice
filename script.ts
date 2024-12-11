import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: { name: "Joey", email: "Joey@gmail.com", age: 19 },
  // });
  const user = await prisma.user.findMany({
    where: {
      name: "Joey",
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
