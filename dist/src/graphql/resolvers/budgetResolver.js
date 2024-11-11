"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.budgetResolver = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.budgetResolver = {
    Query: {
        getBudget: (_, { id }) => {
            return prisma_1.default.budget.findUnique({
                where: { id }
            });
        },
        getBudgets: () => {
            const budgets = prisma_1.default.budget.findMany();
            if (!budgets) {
                return Promise.resolve([]);
            }
            return budgets;
        }
    },
    Mutation: {
        createBudget: (_, { name, totalAmount, monthlyAllocation, userId }) => {
            return prisma_1.default.budget.create({
                data: {
                    name,
                    totalAmount,
                    monthlyAllocation,
                    userId
                }
            });
        },
        updateBudget: (_, { id, name, totalAmount, monthlyAllocation }) => {
            return prisma_1.default.budget.update({
                where: { id },
                data: { name, totalAmount, monthlyAllocation }
            });
        },
        deleteBudget: (_, { id }) => {
            return prisma_1.default.budget.delete({
                where: { id }
            });
        }
    }
};
