import { logger } from '../config';
import type { Response } from 'express';

const handleHttp = (
  res: Response,
  error: string,
  statusCode = 500,
  errorRaw?: any
): Response => {
  logger.error(errorRaw);

  return res.status(statusCode).send({ ok: false, message: error });
};

export { handleHttp };
