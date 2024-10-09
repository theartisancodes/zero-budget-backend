import express from 'express';
import { authenticateToken } from '../middlewares/authentication';
import {
  createExpenseHandler,
  getExpenseByIdHandler,
  getAllExpensesHandler,
  updateExpenseHandler,
  deleteExpenseHandler
} from '../controllers/expensesController';

const router = express.Router();

router.post('/create', authenticateToken, createExpenseHandler);
router.get('/:id', authenticateToken, getExpenseByIdHandler);
router.get('/', authenticateToken, getAllExpensesHandler);
router.put('/:id', authenticateToken, updateExpenseHandler);
router.delete('/:id', authenticateToken, deleteExpenseHandler);

export default router;
