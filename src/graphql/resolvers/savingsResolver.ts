import prisma from '../../config/prisma';

export const savingResolver = {
  Query: {
    getSaving: (_: unknown, { id }: { id: string }) => {
      return prisma.saving.findUnique({
        where: { id }
      });
    },
    getSavings: () => {
      return prisma.saving.findMany();
    }
  },
  Mutation: {
    createSaving: (
      _: unknown,
      {
        amountSaved,
        goal,
        userId,
        budgetId
      }: { amountSaved: number; goal: number; userId: string; budgetId: string }
    ) => {
      return prisma.saving.create({
        data: {
          amountSaved,
          goal,
          userId,
          budgetId
        }
      });
    },
    updateSaving: (
      _: unknown,
      {
        id,
        amountSaved,
        goal
      }: { id: string; amountSaved?: number; goal?: number }
    ) => {
      return prisma.saving.update({
        where: { id },
        data: { amountSaved, goal }
      });
    },
    deleteSaving: (_: unknown, { id }: { id: string }) => {
      return prisma.saving.delete({
        where: { id }
      });
    }
  }
};
