import prisma from '../config/prisma';
import { Budget, UpdateBudget } from '../types';

export const createBudget = ({
  name,
  totalAmount,
  monthlyAllocation,
  userId
}: Budget) => {
  return prisma.budget.create({
    data: {
      name,
      totalAmount,
      monthlyAllocation,
      userId
    }
  });
};

export const getBudgetById = (id: string) => {
  return prisma.budget.findUnique({
    where: { id }
  });
};

export const getAllBudgets = () => {
  return prisma.budget.findMany();
};

export const updateBudget = ({
  id,
  name,
  totalAmount,
  monthlyAllocation
}: UpdateBudget) => {
  return prisma.budget.update({
    where: { id },
    data: { name, totalAmount, monthlyAllocation }
  });
};

export const deleteBudget = (id: string) => {
  return prisma.budget.delete({
    where: { id }
  });
};
