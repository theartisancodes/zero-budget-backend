import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { schema } from './graphql';
import prisma from './config/prisma';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({
  schema
});

async function startApolloServer() {
  await server.start();
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: ({ req }) => {
        return Promise.resolve({
          prisma,
          user: req.user
        });
      }
    })
  );

  // Health check route
  app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API is healthy!' });
  });

  // Start the Express server
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}

startApolloServer();
