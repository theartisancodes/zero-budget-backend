"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middlewares/authentication");
const savingsController_1 = require("../controllers/savingsController");
const router = express_1.default.Router();
router.post('/create', authentication_1.authenticateToken, savingsController_1.createSavingHandler);
router.get('/:id', authentication_1.authenticateToken, savingsController_1.getSavingByIdHandler);
router.get('/', authentication_1.authenticateToken, savingsController_1.getAllSavingsHandler);
router.put('/:id', authentication_1.authenticateToken, savingsController_1.updateSavingHandler);
router.delete('/:id', authentication_1.authenticateToken, savingsController_1.deleteSavingHandler);
exports.default = router;
