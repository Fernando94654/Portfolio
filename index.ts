import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: 'Fernando Hernandez Cantu',
            email: 'fernando_hdz_cantu@hotmail.com',
        },
    });
    console.log(newUser);
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
