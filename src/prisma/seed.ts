import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profileViewer.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.saving.deleteMany();
  await prisma.budget.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'securepassword123',
      phoneNumber: '1234567890',
      budgets: {
        create: [
          {
            name: 'Personal Budget',
            totalAmount: 5000,
            monthlyAllocation: 1000
          }
        ]
      }
    }
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
