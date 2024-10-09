import prisma from '../config/prisma';

import { User, UpdateUser } from '../types';

export const createUser = ({ email, password, name, phoneNumber }: User) => {
  return prisma.user.create({
    data: {
      email,
      password,
      name,
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
  name,
  email,
  password,
  phoneNumber
}: UpdateUser) => {
  return prisma.user.update({
    where: { id },
    data: { email, password, name, phoneNumber }
  });
};

export const deleteUser = (id: string) => {
  return prisma.user.delete({
    where: { id }
  });
};
