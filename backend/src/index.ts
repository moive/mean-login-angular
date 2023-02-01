import { logger } from './config';
import 'dotenv/config';

import express from 'express';

const app = express();
const PORT = process.env['PORT'] ?? '4000';

app.get('/', (_req, res) => {
  return res.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
