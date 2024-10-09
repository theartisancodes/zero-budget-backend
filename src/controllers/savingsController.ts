import { Request, Response } from 'express';
import {
  createSaving,
  getSavingById,
  getAllSavings,
  updateSaving,
  deleteSaving
} from '../services/savingsService';

export const createSavingHandler = async (req: Request, res: Response) => {
  const { amountSaved, goal, userId, budgetId } = req.body;
  try {
    const newSaving = await createSaving({
      amountSaved,
      goal,
      userId,
      budgetId
    });
    return res.status(201).json(newSaving);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating saving' });
  }
};

export const getSavingByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const saving = await getSavingById(id);
    if (!saving) {
      return res.status(404).json({ error: 'Saving not found' });
    }
    return res.status(200).json(saving);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving saving' });
  }
};

export const getAllSavingsHandler = async (req: Request, res: Response) => {
  try {
    const savings = await getAllSavings();
    return res.status(200).json(savings);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving savings' });
  }
};

export const updateSavingHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amountSaved, goal } = req.body;
  try {
    const updatedSaving = await updateSaving({ id, amountSaved, goal });
    return res.status(200).json(updatedSaving);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating saving' });
  }
};

export const deleteSavingHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteSaving(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting saving' });
  }
};
