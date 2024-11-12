import { createSaving, getSavingById, getAllSavings, updateSaving, deleteSaving } from '../services/savingsService';
export const createSavingHandler = async (req, res) => {
    const { amountSaved, goal, userId, budgetId } = req.body;
    try {
        const newSaving = await createSaving({
            amountSaved,
            goal,
            userId,
            budgetId
        });
        res.status(201).json(newSaving);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating saving' });
    }
};
export const getSavingByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const saving = await getSavingById(id);
        if (!saving) {
            res.status(404).json({ error: 'Saving not found' });
            return;
        }
        res.status(200).json(saving);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving saving' });
    }
};
export const getAllSavingsHandler = async (req, res) => {
    try {
        const savings = await getAllSavings();
        res.status(200).json(savings);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving savings' });
    }
};
export const updateSavingHandler = async (req, res) => {
    const { id } = req.params;
    const { amountSaved, goal } = req.body;
    try {
        const updatedSaving = await updateSaving({ id, amountSaved, goal });
        res.status(200).json(updatedSaving);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating saving' });
    }
};
export const deleteSavingHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteSaving(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting saving' });
    }
};
//# sourceMappingURL=savingsController.js.map