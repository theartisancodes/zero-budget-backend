import prisma from '../../config/prisma';
export const profileViewerResolver = {
    Query: {
        getProfileViewers: (_, { userId }) => {
            return prisma.profileViewer.findMany({
                where: { userId },
                include: { user: true, viewerUser: true }
            });
        }
    },
    Mutation: {
        addProfileViewer: (_, { userId, viewerUserId }) => {
            return prisma.profileViewer.create({
                data: {
                    userId,
                    viewerUserId
                },
                include: { user: true, viewerUser: true }
            });
        },
        removeProfileViewer: async (_, { userId, viewerUserId }) => {
            const deletedViewer = await prisma.profileViewer.deleteMany({
                where: { userId, viewerUserId }
            });
            return deletedViewer.count > 0;
        }
    }
};
//# sourceMappingURL=profileViewerResolver.js.map