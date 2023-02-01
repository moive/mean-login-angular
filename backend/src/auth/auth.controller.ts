import type { Request, Response } from 'express';

import { registerUser } from './auth.service';
// import type { IUser } from './auth.interfaces';
import { handleHttp } from '../utils/error.handle';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, name, password } = req.body;

    const response = await registerUser({ email, name, password });
    return res.send(response);
  } catch (e) {
    return handleHttp(res, 'ERROR AUTH LOGIN FAILED');
  }
};

export { createUser };
// https://www.youtube.com/watch?v=KyyzhRqkJRA
