"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../config/prisma"));
const router = express_1.default.Router();
router.get('/ping', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API is up and running!' });
});
router.get('/status', async (req, res) => {
    try {
        await prisma_1.default.$queryRaw `SELECT 1`;
        res.status(200).json({
            status: 'OK',
            message: 'API and Database are healthy!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                status: 'ERROR',
                message: 'Database connection issue!',
                error: error.message
            });
        }
        else {
            res.status(500).json({
                status: 'ERROR',
                message: 'An unknown error occurred!'
            });
        }
    }
});
exports.default = router;
//# sourceMappingURL=healthCheckRoute.js.map