import { Request, Response } from 'express';
import {
  createExpense,
  getExpenseById,
  getAllExpenses,
  updateExpense,
  deleteExpense
} from '../services/expensesService';

export const createExpenseHandler = async (req: Request, res: Response) => {
  const { amount, category, description, userId, budgetId } = req.body;
  try {
    const newExpense = await createExpense({
      amount,
      category,
      description,
      userId,
      budgetId
    });
    return res.status(201).json(newExpense);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating expense' });
  }
};

export const getExpenseByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const expense = await getExpenseById(id);
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    return res.status(200).json(expense);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving expense' });
  }
};

export const getAllExpensesHandler = async (req: Request, res: Response) => {
  try {
    const expenses = await getAllExpenses();
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving expenses' });
  }
};

export const updateExpenseHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, category, description } = req.body;
  try {
    const updatedExpense = await updateExpense({
      id,
      amount,
      category,
      description
    });
    return res.status(200).json(updatedExpense);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating expense' });
  }
};

export const deleteExpenseHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteExpense(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting expense' });
  }
};
