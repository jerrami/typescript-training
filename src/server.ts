import express from 'express';
import { getEnv } from '../env';
import { get } from './router/router';

const env = getEnv();

export const createServer = () => {
  const app = express();

  app.get('*', get);
  app.listen(env.port, () => {
    console.log(`Server has started at http://${env.host}:${env.port}`);
  });
  return app;
};
