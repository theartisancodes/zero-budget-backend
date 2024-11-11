import prisma from '../../config/prisma';
export const userResolver = {
    Query: {
        getUser: (_, { id }) => {
            return prisma.user.findUnique({
                where: { id }
            });
        },
        getUsers: () => {
            const users = prisma.user.findMany();
            if (!users) {
                return Promise.resolve([]);
            }
            return users;
        }
    },
    Mutation: {
        createUser: (_, { id, email, password, userName, phoneNumber, fullName, firstName, lastName, profilePicture, updatedAt }) => {
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
        updateUser: (_, { id, email, password, userName, phoneNumber, firstName, lastName, profilePicture, updatedAt }) => {
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
        deleteUser: (_, { id }) => {
            return prisma.user.delete({
                where: { id }
            });
        }
    }
};
//# sourceMappingURL=userResolver.js.map