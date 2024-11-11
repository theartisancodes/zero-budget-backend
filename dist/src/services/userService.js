"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUserById = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createUser = ({ id, email, password, userName, phoneNumber = null, fullName, firstName, lastName, profilePicture, updatedAt }) => {
    return prisma_1.default.user.create({
        data: {
            id,
            email,
            password,
            userName,
            phoneNumber,
            fullName,
            firstName,
            lastName,
            profilePicture,
            updatedAt
        }
    });
};
exports.createUser = createUser;
const getUserById = (id) => {
    return prisma_1.default.user.findUnique({
        where: { id }
    });
};
exports.getUserById = getUserById;
const getAllUsers = () => {
    return prisma_1.default.user.findMany();
};
exports.getAllUsers = getAllUsers;
const updateUser = ({ id, userName, email, password, phoneNumber, fullName, firstName, lastName, profilePicture, updatedAt }) => {
    return prisma_1.default.user.update({
        where: { id },
        data: {
            email,
            password,
            userName,
            phoneNumber,
            fullName,
            firstName,
            lastName,
            profilePicture,
            updatedAt
        }
    });
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    return prisma_1.default.user.delete({
        where: { id }
    });
};
exports.deleteUser = deleteUser;
