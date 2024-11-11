import { createBudget, getBudgetById, getAllBudgets, updateBudget, deleteBudget } from '../services/budgetService';
export const createBudgetHandler = async (req, res) => {
    const { name, totalAmount, monthlyAllocation, userId } = req.body;
    try {
        const newBudget = await createBudget({
            name,
            totalAmount,
            monthlyAllocation,
            userId
        });
        res.status(201).json(newBudget);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating budget' });
    }
};
export const getBudgetByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const budget = await getBudgetById(id);
        if (!budget) {
            res.status(404).json({ error: 'Budget not found' });
            return;
        }
        res.status(200).json(budget);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving budget' });
    }
};
export const getAllBudgetsHandler = async (req, res) => {
    try {
        const budgets = await getAllBudgets();
        res.status(200).json(budgets);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving budgets' });
    }
};
export const updateBudgetHandler = async (req, res) => {
    const { id } = req.params;
    const { name, totalAmount, monthlyAllocation } = req.body;
    try {
        const updatedBudget = await updateBudget({
            id,
            name,
            totalAmount,
            monthlyAllocation
        });
        res.status(200).json(updatedBudget);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating budget' });
    }
};
export const deleteBudgetHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteBudget(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting budget' });
    }
};
//# sourceMappingURL=budgetController.js.map