"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSaving = exports.updateSaving = exports.getAllSavings = exports.getSavingById = exports.createSaving = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createSaving = ({ amountSaved, goal, userId, budgetId }) => {
    return prisma_1.default.saving.create({
        data: {
            amountSaved,
            goal,
            userId,
            budgetId
        }
    });
};
exports.createSaving = createSaving;
const getSavingById = (id) => {
    return prisma_1.default.saving.findUnique({
        where: { id }
    });
};
exports.getSavingById = getSavingById;
const getAllSavings = () => {
    return prisma_1.default.saving.findMany();
};
exports.getAllSavings = getAllSavings;
const updateSaving = ({ id, amountSaved, goal }) => {
    return prisma_1.default.saving.update({
        where: { id },
        data: { amountSaved, goal }
    });
};
exports.updateSaving = updateSaving;
const deleteSaving = (id) => {
    return prisma_1.default.saving.delete({
        where: { id }
    });
};
exports.deleteSaving = deleteSaving;
