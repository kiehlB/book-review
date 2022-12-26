import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import cors from 'cors';

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://www.woongblog.xyz',
    credentials: true,
  }),
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (_req, res) => res.send('hello'));

async function startServer() {
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
    }),
    introspection: true,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: false,
    },
  });
}

startServer();

export default app;
