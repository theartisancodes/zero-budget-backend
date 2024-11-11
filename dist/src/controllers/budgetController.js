"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBudgetHandler = exports.updateBudgetHandler = exports.getAllBudgetsHandler = exports.getBudgetByIdHandler = exports.createBudgetHandler = void 0;
const budgetService_1 = require("../services/budgetService");
const createBudgetHandler = async (req, res) => {
    const { name, totalAmount, monthlyAllocation, userId } = req.body;
    try {
        const newBudget = await (0, budgetService_1.createBudget)({
            name,
            totalAmount,
            monthlyAllocation,
            userId
        });
        return res.status(201).json(newBudget);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error creating budget' });
    }
};
exports.createBudgetHandler = createBudgetHandler;
const getBudgetByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const budget = await (0, budgetService_1.getBudgetById)(id);
        if (!budget) {
            return res.status(404).json({ error: 'Budget not found' });
        }
        return res.status(200).json(budget);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error retrieving budget' });
    }
};
exports.getBudgetByIdHandler = getBudgetByIdHandler;
const getAllBudgetsHandler = async (req, res) => {
    try {
        const budgets = await (0, budgetService_1.getAllBudgets)();
        return res.status(200).json(budgets);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error retrieving budgets' });
    }
};
exports.getAllBudgetsHandler = getAllBudgetsHandler;
const updateBudgetHandler = async (req, res) => {
    const { id } = req.params;
    const { name, totalAmount, monthlyAllocation } = req.body;
    try {
        const updatedBudget = await (0, budgetService_1.updateBudget)({
            id,
            name,
            totalAmount,
            monthlyAllocation
        });
        return res.status(200).json(updatedBudget);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error updating budget' });
    }
};
exports.updateBudgetHandler = updateBudgetHandler;
const deleteBudgetHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await (0, budgetService_1.deleteBudget)(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Error deleting budget' });
    }
};
exports.deleteBudgetHandler = deleteBudgetHandler;
