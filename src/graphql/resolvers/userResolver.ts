import prisma from '../../config/prisma';
import { UpdateUser, User } from '../../types';

export const userResolver = {
  Query: {
    getUser: (_: unknown, { id }: { id: string }) => {
      return prisma.user.findUnique({
        where: { id }
      });
    },
    getUsers: () => {
      const users = prisma.user.findMany();
      if (!users) {
        return [];
      }
      return users;
    }
  },
  Mutation: {
    createUser: (
      _: unknown,
      { email, password, userName, phoneNumber }: User
    ) => {
      return prisma.user.create({
        data: { userName, email, phoneNumber, password }
      });
    },
    updateUser: (
      _: unknown,
      { id, email, password, userName, phoneNumber }: UpdateUser
    ) => {
      return prisma.user.update({
        where: { id },
        data: { email, password, userName, phoneNumber }
      });
    },
    deleteUser: (_: unknown, { id }: { id: string }) => {
      return prisma.user.delete({
        where: { id }
      });
    }
  }
};
