import { logger } from './config';
import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  return res.json({ message: 'Hello world' });
});

app.listen(4000, () => {
  logger.info('Server started on port 4000');
});
