import prisma from '../config/prisma';
export const createExpense = ({ amount, category, description, userId, budgetId }) => {
    return prisma.expense.create({
        data: {
            amount,
            category,
            description,
            userId,
            budgetId
        }
    });
};
export const getExpenseById = (id) => {
    return prisma.expense.findUnique({
        where: { id }
    });
};
export const getAllExpenses = () => {
    return prisma.expense.findMany();
};
export const updateExpense = ({ id, amount, category, description }) => {
    return prisma.expense.update({
        where: { id },
        data: { amount, category, description }
    });
};
export const deleteExpense = (id) => {
    return prisma.expense.delete({
        where: { id }
    });
};
//# sourceMappingURL=expensesService.js.map