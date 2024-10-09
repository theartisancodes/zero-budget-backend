import express from 'express';
import { authenticateToken } from '../middlewares/authentication';
import {
  createSavingHandler,
  getSavingByIdHandler,
  getAllSavingsHandler,
  updateSavingHandler,
  deleteSavingHandler
} from '../controllers/savingsController';

const router = express.Router();

router.post('/create', authenticateToken, createSavingHandler);
router.get('/:id', authenticateToken, getSavingByIdHandler);
router.get('/', authenticateToken, getAllSavingsHandler);
router.put('/:id', authenticateToken, updateSavingHandler);
router.delete('/:id', authenticateToken, deleteSavingHandler);

export default router;
