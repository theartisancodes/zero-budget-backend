import express from 'express';
import { authenticateToken } from '../middlewares/authentication';
import { createBudgetHandler, getBudgetByIdHandler, getAllBudgetsHandler, updateBudgetHandler, deleteBudgetHandler } from '../controllers/budgetController';
const router = express.Router();
router.post('/create', authenticateToken, createBudgetHandler);
router.get('/:id', authenticateToken, getBudgetByIdHandler);
router.get('/', authenticateToken, getAllBudgetsHandler);
router.put('/:id', authenticateToken, updateBudgetHandler);
router.delete('/:id', authenticateToken, deleteBudgetHandler);
export default router;
//# sourceMappingURL=budgetRoutes.js.map