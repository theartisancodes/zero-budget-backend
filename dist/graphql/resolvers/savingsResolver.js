"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingResolver = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.savingResolver = {
    Query: {
        getSaving: (_, { id }) => {
            return prisma_1.default.saving.findUnique({
                where: { id }
            });
        },
        getSavings: () => {
            const savings = prisma_1.default.saving.findMany();
            if (!savings) {
                return Promise.resolve([]);
            }
            return savings;
        }
    },
    Mutation: {
        createSaving: (_, { amountSaved, goal, userId, budgetId }) => {
            return prisma_1.default.saving.create({
                data: {
                    amountSaved,
                    goal,
                    userId,
                    budgetId
                }
            });
        },
        updateSaving: (_, { id, amountSaved, goal }) => {
            return prisma_1.default.saving.update({
                where: { id },
                data: { amountSaved, goal }
            });
        },
        deleteSaving: (_, { id }) => {
            return prisma_1.default.saving.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=savingsResolver.js.map