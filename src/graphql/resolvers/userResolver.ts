import prisma from '../../config/prisma';
import { UpdateUser, User } from '../../types';

export const userResolver = {
  Query: {
    getUser: (_: unknown, { id }: { id: string }) => {
      return prisma.user.findUnique({
        where: { id }
      });
    },
    getUsers: (): Promise<
      {
        id: string;
        email: string;
        password: string;
        userName: string;
        phoneNumber: string;
        fullName: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
        updatedAt: Date;
      }[]
    > => {
      const users = prisma.user.findMany();
      if (!users) {
        return Promise.resolve([]);
      }
      return users;
    }
  },
  Mutation: {
    createUser: (
      _: unknown,
      {
        id,
        email,
        password,
        userName,
        phoneNumber,
        fullName,
        firstName,
        lastName,
        profilePicture,
        updatedAt
      }: User
    ) => {
      return prisma.user.create({
        data: {
          id,
          userName,
          email,
          phoneNumber,
          password,
          fullName,
          firstName,
          lastName,
          profilePicture,
          updatedAt
        }
      });
    },
    updateUser: (
      _: unknown,
      {
        id,
        email,
        password,
        userName,
        phoneNumber,
        firstName,
        lastName,
        profilePicture,
        updatedAt
      }: UpdateUser
    ) => {
      return prisma.user.update({
        where: { id },
        data: {
          email,
          password,
          userName,
          phoneNumber,
          firstName,
          lastName,
          profilePicture,
          updatedAt
        }
      });
    },
    deleteUser: (_: unknown, { id }: { id: string }) => {
      return prisma.user.delete({
        where: { id }
      });
    }
  }
};
