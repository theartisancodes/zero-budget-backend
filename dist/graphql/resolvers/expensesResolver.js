import prisma from '../../config/prisma';
export const expenseResolver = {
    Query: {
        getExpense: (_, { id }) => {
            return prisma.expense.findUnique({
                where: { id }
            });
        },
        getExpenses: () => {
            const expenses = prisma.expense.findMany();
            if (!expenses) {
                return Promise.resolve([]);
            }
            return expenses;
        }
    },
    Mutation: {
        createExpense: (_, { amount, category, description, userId, budgetId }) => {
            return prisma.expense.create({
                data: {
                    amount,
                    category,
                    description,
                    userId,
                    budgetId
                }
            });
        },
        updateExpense: (_, { id, amount, category, description }) => {
            return prisma.expense.update({
                where: { id },
                data: { amount, category, description }
            });
        },
        deleteExpense: (_, { id }) => {
            return prisma.expense.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=expensesResolver.js.map