"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.getAllExpenses = exports.getExpenseById = exports.createExpense = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createExpense = ({ amount, category, description, userId, budgetId }) => {
    return prisma_1.default.expense.create({
        data: {
            amount,
            category,
            description,
            userId,
            budgetId
        }
    });
};
exports.createExpense = createExpense;
const getExpenseById = (id) => {
    return prisma_1.default.expense.findUnique({
        where: { id }
    });
};
exports.getExpenseById = getExpenseById;
const getAllExpenses = () => {
    return prisma_1.default.expense.findMany();
};
exports.getAllExpenses = getAllExpenses;
const updateExpense = ({ id, amount, category, description }) => {
    return prisma_1.default.expense.update({
        where: { id },
        data: { amount, category, description }
    });
};
exports.updateExpense = updateExpense;
const deleteExpense = (id) => {
    return prisma_1.default.expense.delete({
        where: { id }
    });
};
exports.deleteExpense = deleteExpense;
