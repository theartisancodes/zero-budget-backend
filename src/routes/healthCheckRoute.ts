import express from 'express';
import prisma from '../config/prisma';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is up and running!' });
});

router.get('/status', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      status: 'OK',
      message: 'API and Database are healthy!'
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        status: 'ERROR',
        message: 'Database connection issue!',
        error: error.message
      });
    } else {
      res.status(500).json({
        status: 'ERROR',
        message: 'An unknown error occurred!'
      });
    }
  }
});

export default router;
