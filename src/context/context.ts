import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { User } from '../types';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  user?: User;
}

export interface AuthenticatedRequest extends Request {
  user?: User;
}

export const context = ({ req }: { req: AuthenticatedRequest }): Context => {
  return {
    prisma,
    user: req.user || undefined
  };
};
