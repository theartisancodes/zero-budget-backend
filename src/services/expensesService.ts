import prisma from '../config/prisma';
import { Expense, UpdateExpense } from '../types';

export const createExpense = ({
  amount,
  category,
  description,
  userId,
  budgetId
}: Expense) => {
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

export const getExpenseById = (id: string) => {
  return prisma.expense.findUnique({
    where: { id }
  });
};

export const getAllExpenses = () => {
  return prisma.expense.findMany();
};

export const updateExpense = ({
  id,
  amount,
  category,
  description
}: UpdateExpense) => {
  return prisma.expense.update({
    where: { id },
    data: { amount, category, description }
  });
};

export const deleteExpense = (id: string) => {
  return prisma.expense.delete({
    where: { id }
  });
};
