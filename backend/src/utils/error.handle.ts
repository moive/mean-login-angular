import { logger } from '../config';
import type { Response } from 'express';

const handleHttp = (
  res: Response,
  error: string,
  statusCode = 500,
  errorRaw?: any
): Response => {
  logger.error(errorRaw);

  const t = res.status(statusCode).send({ error });
  return t;
};

export { handleHttp };
