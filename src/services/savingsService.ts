import prisma from '../config/prisma';
import { Saving, UpdateSaving } from '../types';

export const createSaving = ({
  amountSaved,
  goal,
  userId,
  budgetId
}: Saving) => {
  return prisma.saving.create({
    data: {
      amountSaved,
      goal,
      userId,
      budgetId
    }
  });
};

export const getSavingById = (id: string) => {
  return prisma.saving.findUnique({
    where: { id }
  });
};

export const getAllSavings = () => {
  return prisma.saving.findMany();
};

export const updateSaving = ({ id, amountSaved, goal }: UpdateSaving) => {
  return prisma.saving.update({
    where: { id },
    data: { amountSaved, goal }
  });
};

export const deleteSaving = (id: string) => {
  return prisma.saving.delete({
    where: { id }
  });
};
