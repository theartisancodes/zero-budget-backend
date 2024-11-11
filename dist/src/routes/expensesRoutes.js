"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middlewares/authentication");
const expensesController_1 = require("../controllers/expensesController");
const router = express_1.default.Router();
router.post('/create', authentication_1.authenticateToken, expensesController_1.createExpenseHandler);
router.get('/:id', authentication_1.authenticateToken, expensesController_1.getExpenseByIdHandler);
router.get('/', authentication_1.authenticateToken, expensesController_1.getAllExpensesHandler);
router.put('/:id', authentication_1.authenticateToken, expensesController_1.updateExpenseHandler);
router.delete('/:id', authentication_1.authenticateToken, expensesController_1.deleteExpenseHandler);
exports.default = router;
