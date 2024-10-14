import prisma from '../../config/prisma';

export const expenseResolver = {
  Query: {
    getExpense: (_: unknown, { id }: { id: string }) => {
      return prisma.expense.findUnique({
        where: { id }
      });
    },
    getExpenses: () => {
      const expenses = prisma.expense.findMany();
      if (!expenses) {
        return [];
      }
      return expenses;
    }
  },
  Mutation: {
    createExpense: (
      _: unknown,
      {
        amount,
        category,
        description,
        userId,
        budgetId
      }: {
        amount: number;
        category: string;
        description: string;
        userId: string;
        budgetId: string;
      }
    ) => {
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
    updateExpense: (
      _: unknown,
      {
        id,
        amount,
        category,
        description
      }: {
        id: string;
        amount?: number;
        category?: string;
        description?: string;
      }
    ) => {
      return prisma.expense.update({
        where: { id },
        data: { amount, category, description }
      });
    },
    deleteExpense: (_: unknown, { id }: { id: string }) => {
      return prisma.expense.delete({
        where: { id }
      });
    }
  }
};
