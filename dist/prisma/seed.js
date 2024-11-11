"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.profileViewer.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.saving.deleteMany();
    await prisma.budget.deleteMany();
    await prisma.user.deleteMany();
    await prisma.user.create({
        data: {
            userName: 'MrTest',
            email: 'kjoenzau@gmail.com',
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
