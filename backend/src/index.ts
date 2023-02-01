import app from './app';
import { logger } from './config';
import 'dotenv/config';

const PORT = process.env['PORT'] ?? '4000';

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
