import prisma from '../config/prisma';
export const createSaving = ({ amountSaved, goal, userId, budgetId }) => {
    return prisma.saving.create({
        data: {
            amountSaved,
            goal,
            userId,
            budgetId
        }
    });
};
export const getSavingById = (id) => {
    return prisma.saving.findUnique({
        where: { id }
    });
};
export const getAllSavings = () => {
    return prisma.saving.findMany();
};
export const updateSaving = ({ id, amountSaved, goal }) => {
    return prisma.saving.update({
        where: { id },
        data: { amountSaved, goal }
    });
};
export const deleteSaving = (id) => {
    return prisma.saving.delete({
        where: { id }
    });
};
//# sourceMappingURL=savingsService.js.map