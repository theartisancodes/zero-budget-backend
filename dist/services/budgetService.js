import prisma from '../config/prisma';
export const createBudget = ({ name, totalAmount, monthlyAllocation, userId }) => {
    return prisma.budget.create({
        data: {
            name,
            totalAmount,
            monthlyAllocation,
            userId
        }
    });
};
export const getBudgetById = (id) => {
    return prisma.budget.findUnique({
        where: { id }
    });
};
export const getAllBudgets = () => {
    return prisma.budget.findMany();
};
export const updateBudget = ({ id, name, totalAmount, monthlyAllocation }) => {
    return prisma.budget.update({
        where: { id },
        data: { name, totalAmount, monthlyAllocation }
    });
};
export const deleteBudget = (id) => {
    return prisma.budget.delete({
        where: { id }
    });
};
//# sourceMappingURL=budgetService.js.map