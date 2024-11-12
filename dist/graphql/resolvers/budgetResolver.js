import prisma from '../../config/prisma';
export const budgetResolver = {
    Query: {
        getBudget: (_, { id }) => {
            return prisma.budget.findUnique({
                where: { id }
            });
        },
        getBudgets: () => {
            const budgets = prisma.budget.findMany();
            if (!budgets) {
                return Promise.resolve([]);
            }
            return budgets;
        }
    },
    Mutation: {
        createBudget: (_, { name, totalAmount, monthlyAllocation, userId }) => {
            return prisma.budget.create({
                data: {
                    name,
                    totalAmount,
                    monthlyAllocation,
                    userId
                }
            });
        },
        updateBudget: (_, { id, name, totalAmount, monthlyAllocation }) => {
            return prisma.budget.update({
                where: { id },
                data: { name, totalAmount, monthlyAllocation }
            });
        },
        deleteBudget: (_, { id }) => {
            return prisma.budget.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=budgetResolver.js.map