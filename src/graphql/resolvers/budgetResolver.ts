import prisma from '../../config/prisma';

export const budgetResolver = {
  Query: {
    getBudget: (_: unknown, { id }: { id: string }) => {
      return prisma.budget.findUnique({
        where: { id }
      });
    },
    getBudgets: () => {
      const budgets = prisma.budget.findMany();
      if (!budgets) {
        return [];
      }
      return budgets;
    }
  },
  Mutation: {
    createBudget: (
      _: unknown,
      {
        name,
        totalAmount,
        monthlyAllocation,
        userId
      }: {
        name: string;
        totalAmount: number;
        monthlyAllocation: number;
        userId: string;
      }
    ) => {
      return prisma.budget.create({
        data: {
          name,
          totalAmount,
          monthlyAllocation,
          userId
        }
      });
    },
    updateBudget: (
      _: unknown,
      {
        id,
        name,
        totalAmount,
        monthlyAllocation
      }: {
        id: string;
        name?: string;
        totalAmount?: number;
        monthlyAllocation?: number;
      }
    ) => {
      return prisma.budget.update({
        where: { id },
        data: { name, totalAmount, monthlyAllocation }
      });
    },
    deleteBudget: (_: unknown, { id }: { id: string }) => {
      return prisma.budget.delete({
        where: { id }
      });
    }
  }
};
