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
      prisma.user.findMany();
    }
  },
  Mutation: {
    createUser: (_: unknown, { email, password, name, phoneNumber }: User) => {
      return prisma.user.create({
        data: { name, email, phoneNumber, password }
      });
    },
    updateUser: (
      _: unknown,
      { id, email, password, name, phoneNumber }: UpdateUser
    ) => {
      return prisma.user.update({
        where: { id },
        data: { email, password, name, phoneNumber }
      });
    },
    deleteUser: (_: unknown, { id }: { id: string }) => {
      return prisma.user.delete({
        where: { id }
      });
    }
  }
};
