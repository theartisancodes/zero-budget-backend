import prisma from '../config/prisma';

import { User, UpdateUser } from '../types';

export const createUser = ({
  email,
  password,
  userName,
  phoneNumber
}: User) => {
  return prisma.user.create({
    data: {
      email,
      password,
      userName,
      phoneNumber
    }
  });
};

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const getAllUsers = () => {
  return prisma.user.findMany();
};

export const updateUser = ({
  id,
  userName,
  email,
  password,
  phoneNumber
}: UpdateUser) => {
  return prisma.user.update({
    where: { id },
    data: { email, password, userName, phoneNumber }
  });
};

export const deleteUser = (id: string) => {
  return prisma.user.delete({
    where: { id }
  });
};
