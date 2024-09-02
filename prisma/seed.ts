import { PrismaClient } from "@prisma/client";
import { hashSyncPassword } from "../lib/hash-password";
const prisma = new PrismaClient();

async function main() {
  const password = await hashSyncPassword("admin");

  const userSeed = await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@gmail.com",
      password,
      role: "ADMIN",
    },
  });

  console.log({ userSeed });
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
