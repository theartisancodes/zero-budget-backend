import { Request, Response } from 'express';
import {
  createExpense,
  getExpenseById,
  getAllExpenses,
  updateExpense,
  deleteExpense
} from '../services/expensesService';

export const createExpenseHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { amount, category, description, userId, budgetId } = req.body;
  try {
    const newExpense = await createExpense({
      amount,
      category,
      description,
      userId,
      budgetId
    });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: 'Error creating expense' });
  }
};

export const getExpenseByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const expense = await getExpenseById(id);
    if (!expense) {
      res.status(404).json({ error: 'Expense not found' });
      return;
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving expense' });
  }
};

export const getAllExpensesHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenses = await getAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving expenses' });
  }
};

export const updateExpenseHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { amount, category, description } = req.body;
  try {
    const updatedExpense = await updateExpense({
      id,
      amount,
      category,
      description
    });
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: 'Error updating expense' });
  }
};

export const deleteExpenseHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteExpense(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting expense' });
  }
};
