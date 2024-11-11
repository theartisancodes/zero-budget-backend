"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middlewares/authentication");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/create', userController_1.createUserHandler);
router.get('/:id', authentication_1.authenticateToken, userController_1.getUserByIdHandler);
router.get('/', authentication_1.authenticateToken, userController_1.getAllUsersHandler);
router.put('/:id', authentication_1.authenticateToken, userController_1.updateUserHandler);
router.delete('/:id', authentication_1.authenticateToken, userController_1.deleteUserHandler);
exports.default = router;
