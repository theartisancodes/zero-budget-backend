"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBudget = exports.updateBudget = exports.getAllBudgets = exports.getBudgetById = exports.createBudget = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createBudget = ({ name, totalAmount, monthlyAllocation, userId }) => {
    return prisma_1.default.budget.create({
        data: {
            name,
            totalAmount,
            monthlyAllocation,
            userId
        }
    });
};
exports.createBudget = createBudget;
const getBudgetById = (id) => {
    return prisma_1.default.budget.findUnique({
        where: { id }
    });
};
exports.getBudgetById = getBudgetById;
const getAllBudgets = () => {
    return prisma_1.default.budget.findMany();
};
exports.getAllBudgets = getAllBudgets;
const updateBudget = ({ id, name, totalAmount, monthlyAllocation }) => {
    return prisma_1.default.budget.update({
        where: { id },
        data: { name, totalAmount, monthlyAllocation }
    });
};
exports.updateBudget = updateBudget;
const deleteBudget = (id) => {
    return prisma_1.default.budget.delete({
        where: { id }
    });
};
exports.deleteBudget = deleteBudget;
//# sourceMappingURL=budgetService.js.map