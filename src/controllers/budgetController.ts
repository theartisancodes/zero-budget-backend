import { Request, Response } from 'express';
import {
  createBudget,
  getBudgetById,
  getAllBudgets,
  updateBudget,
  deleteBudget
} from '../services/budgetService';

export const createBudgetHandler = async (req: Request, res: Response) => {
  const { name, totalAmount, monthlyAllocation, userId } = req.body;
  try {
    const newBudget = await createBudget({
      name,
      totalAmount,
      monthlyAllocation,
      userId
    });
    return res.status(201).json(newBudget);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating budget' });
  }
};

export const getBudgetByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const budget = await getBudgetById(id);
    if (!budget) {
      return res.status(404).json({ error: 'Budget not found' });
    }
    return res.status(200).json(budget);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving budget' });
  }
};

export const getAllBudgetsHandler = async (req: Request, res: Response) => {
  try {
    const budgets = await getAllBudgets();
    return res.status(200).json(budgets);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving budgets' });
  }
};

export const updateBudgetHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, totalAmount, monthlyAllocation } = req.body;
  try {
    const updatedBudget = await updateBudget({
      id,
      name,
      totalAmount,
      monthlyAllocation
    });
    return res.status(200).json(updatedBudget);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating budget' });
  }
};

export const deleteBudgetHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteBudget(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting budget' });
  }
};
