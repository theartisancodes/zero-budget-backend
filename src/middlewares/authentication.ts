import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types';

interface AuthenticatedRequest extends Request {
  user?: User;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  if (!process.env.JWT_SECRET) {
    res.status(500).json({ message: 'JWT Secret not configured' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.status(403).json({ message: 'Token has expired' });
      } else {
        res.status(403).json({ message: 'Invalid token' });
      }
      return;
    }

    (req as AuthenticatedRequest).user = user;
    next();
  });
};
