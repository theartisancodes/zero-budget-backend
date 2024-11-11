"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseResolver = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.expenseResolver = {
    Query: {
        getExpense: (_, { id }) => {
            return prisma_1.default.expense.findUnique({
                where: { id }
            });
        },
        getExpenses: () => {
            const expenses = prisma_1.default.expense.findMany();
            if (!expenses) {
                return Promise.resolve([]);
            }
            return expenses;
        }
    },
    Mutation: {
        createExpense: (_, { amount, category, description, userId, budgetId }) => {
            return prisma_1.default.expense.create({
                data: {
                    amount,
                    category,
                    description,
                    userId,
                    budgetId
                }
            });
        },
        updateExpense: (_, { id, amount, category, description }) => {
            return prisma_1.default.expense.update({
                where: { id },
                data: { amount, category, description }
            });
        },
        deleteExpense: (_, { id }) => {
            return prisma_1.default.expense.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=expensesResolver.js.map