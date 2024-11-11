import prisma from '../config/prisma';
export const createUser = ({ id, email, password, userName, phoneNumber = null, fullName, firstName, lastName, profilePicture, updatedAt }) => {
    return prisma.user.create({
        data: {
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
        }
    });
};
export const getUserById = (id) => {
    return prisma.user.findUnique({
        where: { id }
    });
};
export const getAllUsers = () => {
    return prisma.user.findMany();
};
export const updateUser = ({ id, userName, email, password, phoneNumber, fullName, firstName, lastName, profilePicture, updatedAt }) => {
    return prisma.user.update({
        where: { id },
        data: {
            email,
            password,
            userName,
            phoneNumber,
            fullName,
            firstName,
            lastName,
            profilePicture,
            updatedAt
        }
    });
};
export const deleteUser = (id) => {
    return prisma.user.delete({
        where: { id }
    });
};
//# sourceMappingURL=userService.js.map