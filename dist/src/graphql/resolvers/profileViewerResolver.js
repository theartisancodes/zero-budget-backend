"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileViewerResolver = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.profileViewerResolver = {
    Query: {
        getProfileViewers: (_, { userId }) => {
            return prisma_1.default.profileViewer.findMany({
                where: { userId },
                include: { user: true, viewerUser: true }
            });
        }
    },
    Mutation: {
        addProfileViewer: (_, { userId, viewerUserId }) => {
            return prisma_1.default.profileViewer.create({
                data: {
                    userId,
                    viewerUserId
                },
                include: { user: true, viewerUser: true }
            });
        },
        removeProfileViewer: async (_, { userId, viewerUserId }) => {
            const deletedViewer = await prisma_1.default.profileViewer.deleteMany({
                where: { userId, viewerUserId }
            });
            return deletedViewer.count > 0;
        }
    }
};
