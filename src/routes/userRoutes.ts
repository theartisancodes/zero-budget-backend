import express from 'express';
import { authenticateToken } from '../middlewares/authentication';
import {
  createUserHandler,
  getUserByIdHandler,
  getAllUsersHandler,
  updateUserHandler,
  deleteUserHandler
} from '../controllers/userController';

const router = express.Router();

router.post('/create', createUserHandler);

router.get('/:id', authenticateToken, getUserByIdHandler);

router.get('/', authenticateToken, getAllUsersHandler);

router.put('/:id', authenticateToken, updateUserHandler);

router.delete('/:id', authenticateToken, deleteUserHandler);

export default router;
