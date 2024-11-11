import { Request, Response } from 'express';
import {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
} from '../services/userService';
import { User } from '../types';

export const createUserHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    email,
    password,
    userName,
    phoneNumber,
    fullName,
    firstName,
    lastName,
    profilePicture,
    updatedAt
  } = req.body as User;
  try {
    const newUser = await createUser({
      email,
      password,
      userName,
      phoneNumber,
      fullName,
      firstName,
      lastName,
      profilePicture,
      updatedAt
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export const getUserByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user' });
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {
    email,
    password,
    userName,
    phoneNumber,
    firstName,
    lastName,
    profilePicture,
    updatedAt
  } = req.body;
  try {
    const updatedUser = await updateUser({
      id,
      email,
      password,
      userName,
      phoneNumber,
      firstName,
      lastName,
      profilePicture,
      updatedAt
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
};

export const deleteUserHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
};
