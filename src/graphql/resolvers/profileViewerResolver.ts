import prisma from '../../config/prisma';

export const profileViewerResolver = {
  Query: {
    getProfileViewers: (_: unknown, { userId }: { userId: string }) => {
      return prisma.profileViewer.findMany({
        where: { userId },
        include: { user: true, viewerUser: true }
      });
    }
  },
  Mutation: {
    addProfileViewer: (
      _: unknown,
      { userId, viewerUserId }: { userId: string; viewerUserId: string }
    ) => {
      return prisma.profileViewer.create({
        data: {
          userId,
          viewerUserId
        },
        include: { user: true, viewerUser: true }
      });
    },

    removeProfileViewer: async (
      _: unknown,
      { userId, viewerUserId }: { userId: string; viewerUserId: string }
    ) => {
      const deletedViewer = await prisma.profileViewer.deleteMany({
        where: { userId, viewerUserId }
      });
      return deletedViewer.count > 0;
    }
  }
};
