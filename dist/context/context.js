import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const context = ({ req }) => {
    return {
        prisma,
        user: req.user || undefined
    };
};
//# sourceMappingURL=context.js.map