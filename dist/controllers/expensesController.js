"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenseHandler = exports.updateExpenseHandler = exports.getAllExpensesHandler = exports.getExpenseByIdHandler = exports.createExpenseHandler = void 0;
const expensesService_1 = require("../services/expensesService");
const createExpenseHandler = async (req, res) => {
    const { amount, category, description, userId, budgetId } = req.body;
    try {
        const newExpense = await (0, expensesService_1.createExpense)({
            amount,
            category,
            description,
            userId,
            budgetId
        });
        res.status(201).json(newExpense);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating expense' });
    }
};
exports.createExpenseHandler = createExpenseHandler;
const getExpenseByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await (0, expensesService_1.getExpenseById)(id);
        if (!expense) {
            res.status(404).json({ error: 'Expense not found' });
            return;
        }
        res.status(200).json(expense);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving expense' });
    }
};
exports.getExpenseByIdHandler = getExpenseByIdHandler;
const getAllExpensesHandler = async (req, res) => {
    try {
        const expenses = await (0, expensesService_1.getAllExpenses)();
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving expenses' });
    }
};
exports.getAllExpensesHandler = getAllExpensesHandler;
const updateExpenseHandler = async (req, res) => {
    const { id } = req.params;
    const { amount, category, description } = req.body;
    try {
        const updatedExpense = await (0, expensesService_1.updateExpense)({
            id,
            amount,
            category,
            description
        });
        res.status(200).json(updatedExpense);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating expense' });
    }
};
exports.updateExpenseHandler = updateExpenseHandler;
const deleteExpenseHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await (0, expensesService_1.deleteExpense)(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting expense' });
    }
};
exports.deleteExpenseHandler = deleteExpenseHandler;
//# sourceMappingURL=expensesController.js.map