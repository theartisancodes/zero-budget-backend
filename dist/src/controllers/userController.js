"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserHandler = exports.updateUserHandler = exports.getAllUsersHandler = exports.getUserByIdHandler = exports.createUserHandler = void 0;
const userService_1 = require("../services/userService");
const createUserHandler = async (req, res) => {
    const { email, password, userName, phoneNumber, fullName, firstName, lastName, profilePicture, updatedAt } = req.body;
    try {
        const newUser = await (0, userService_1.createUser)({
            email,
            password,
            userName,
            phoneNumber,
            fullName,
            firstName,
            lastName,
            profilePicture,
            updatedAt
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};
exports.createUserHandler = createUserHandler;
const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await (0, userService_1.getUserById)(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving user' });
    }
};
exports.getUserByIdHandler = getUserByIdHandler;
const getAllUsersHandler = async (req, res) => {
    try {
        const users = await (0, userService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
    }
};
exports.getAllUsersHandler = getAllUsersHandler;
const updateUserHandler = async (req, res) => {
    const { id } = req.params;
    const { email, password, userName, phoneNumber, firstName, lastName, profilePicture, updatedAt } = req.body;
    try {
        const updatedUser = await (0, userService_1.updateUser)({
            id,
            email,
            password,
            userName,
            phoneNumber,
            firstName,
            lastName,
            profilePicture,
            updatedAt
        });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        await (0, userService_1.deleteUser)(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};
exports.deleteUserHandler = deleteUserHandler;
