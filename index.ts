import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: "Ryan",
            email: "fernando@gmail.com"
        }
    })
    console.log(newUser);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());