"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const context = ({ req }) => {
    return {
        prisma,
        user: req.user || undefined
    };
};
exports.context = context;
