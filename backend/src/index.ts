import app from './app';
import { logger } from './config';
import 'dotenv/config';
import dbConnect from './database';

dbConnect
  .then(() => {
    logger.info('Conexion Ready');
  })
  .catch((e) => {
    logger.error(e);
  });

const PORT = process.env['PORT'] ?? '4000';

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
