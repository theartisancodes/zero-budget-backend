"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.userResolver = {
    Query: {
        getUser: (_, { id }) => {
            return prisma_1.default.user.findUnique({
                where: { id }
            });
        },
        getUsers: () => {
            const users = prisma_1.default.user.findMany();
            if (!users) {
                return Promise.resolve([]);
            }
            return users;
        }
    },
    Mutation: {
        createUser: (_, { id, email, password, userName, phoneNumber, fullName, firstName, lastName, profilePicture, updatedAt }) => {
            return prisma_1.default.user.create({
                data: {
                    id,
                    userName,
                    email,
                    phoneNumber,
                    password,
                    fullName,
                    firstName,
                    lastName,
                    profilePicture,
                    updatedAt
                }
            });
        },
        updateUser: (_, { id, email, password, userName, phoneNumber, firstName, lastName, profilePicture, updatedAt }) => {
            return prisma_1.default.user.update({
                where: { id },
                data: {
                    email,
                    password,
                    userName,
                    phoneNumber,
                    firstName,
                    lastName,
                    profilePicture,
                    updatedAt
                }
            });
        },
        deleteUser: (_, { id }) => {
            return prisma_1.default.user.delete({
                where: { id }
            });
        }
    }
};
