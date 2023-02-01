import { logger } from 'config';
import type { Response } from 'express';

const handleHttp = (
  res: Response,
  error: string,
  statusCode: number,
  errorRaw?: any
): void => {
  logger.error(errorRaw);
  res.status(statusCode).send({ error });
};

export { handleHttp };
