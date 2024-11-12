"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middlewares/authentication");
const budgetController_1 = require("../controllers/budgetController");
const router = express_1.default.Router();
router.post('/create', authentication_1.authenticateToken, budgetController_1.createBudgetHandler);
router.get('/:id', authentication_1.authenticateToken, budgetController_1.getBudgetByIdHandler);
router.get('/', authentication_1.authenticateToken, budgetController_1.getAllBudgetsHandler);
router.put('/:id', authentication_1.authenticateToken, budgetController_1.updateBudgetHandler);
router.delete('/:id', authentication_1.authenticateToken, budgetController_1.deleteBudgetHandler);
exports.default = router;
//# sourceMappingURL=budgetRoutes.js.map