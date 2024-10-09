import { Request, Response } from 'express';
import {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
} from '../services/userService';

export const createUserHandler = async (req: Request, res: Response) => {
  const { email, password, name, phoneNumber } = req.body;
  try {
    const newUser = await createUser({ email, password, name, phoneNumber });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating user' });
  }
};

export const getUserByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving user' });
  }
};

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving users' });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name, phoneNumber } = req.body;
  try {
    const updatedUser = await updateUser({
      id,
      email,
      password,
      name,
      phoneNumber
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating user' });
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting user' });
  }
};
