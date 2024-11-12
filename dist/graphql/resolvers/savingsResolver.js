import prisma from '../../config/prisma';
export const savingResolver = {
    Query: {
        getSaving: (_, { id }) => {
            return prisma.saving.findUnique({
                where: { id }
            });
        },
        getSavings: () => {
            const savings = prisma.saving.findMany();
            if (!savings) {
                return Promise.resolve([]);
            }
            return savings;
        }
    },
    Mutation: {
        createSaving: (_, { amountSaved, goal, userId, budgetId }) => {
            return prisma.saving.create({
                data: {
                    amountSaved,
                    goal,
                    userId,
                    budgetId
                }
            });
        },
        updateSaving: (_, { id, amountSaved, goal }) => {
            return prisma.saving.update({
                where: { id },
                data: { amountSaved, goal }
            });
        },
        deleteSaving: (_, { id }) => {
            return prisma.saving.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=savingsResolver.js.map