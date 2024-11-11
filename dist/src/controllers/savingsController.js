"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSavingHandler = exports.updateSavingHandler = exports.getAllSavingsHandler = exports.getSavingByIdHandler = exports.createSavingHandler = void 0;
const savingsService_1 = require("../services/savingsService");
const createSavingHandler = async (req, res) => {
    const { amountSaved, goal, userId, budgetId } = req.body;
    try {
        const newSaving = await (0, savingsService_1.createSaving)({
            amountSaved,
            goal,
            userId,
            budgetId
        });
        return res.status(201).json(newSaving);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error creating saving' });
    }
};
exports.createSavingHandler = createSavingHandler;
const getSavingByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const saving = await (0, savingsService_1.getSavingById)(id);
        if (!saving) {
            return res.status(404).json({ error: 'Saving not found' });
        }
        return res.status(200).json(saving);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error retrieving saving' });
    }
};
exports.getSavingByIdHandler = getSavingByIdHandler;
const getAllSavingsHandler = async (req, res) => {
    try {
        const savings = await (0, savingsService_1.getAllSavings)();
        return res.status(200).json(savings);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error retrieving savings' });
    }
};
exports.getAllSavingsHandler = getAllSavingsHandler;
const updateSavingHandler = async (req, res) => {
    const { id } = req.params;
    const { amountSaved, goal } = req.body;
    try {
        const updatedSaving = await (0, savingsService_1.updateSaving)({ id, amountSaved, goal });
        return res.status(200).json(updatedSaving);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error updating saving' });
    }
};
exports.updateSavingHandler = updateSavingHandler;
const deleteSavingHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await (0, savingsService_1.deleteSaving)(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ error: 'Error deleting saving' });
    }
};
exports.deleteSavingHandler = deleteSavingHandler;
