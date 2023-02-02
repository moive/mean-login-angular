import type { Request, Response } from 'express';

import { loginUser, registerUser } from './auth.service';
import { handleHttp } from '../utils/error.handle';

const createUserCtrl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, name, password } = req.body;

    const response = await registerUser({ email, name, password });
    return res.send(response);
  } catch (e) {
    return handleHttp(res, 'ERROR AUTH LOGIN FAILED');
  }
};

const loginUserCtrl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const isLoggedIn = await loginUser({ email, password });
    if (isLoggedIn.message === 'PASSWORD INCORRECT')
      return res.status(403).send(isLoggedIn);

    return res.send(isLoggedIn);
  } catch (e) {
    return handleHttp(res, 'ERROR AUTH LOGIN FAILED');
  }
};

export { createUserCtrl, loginUserCtrl };
// https://www.youtube.com/watch?v=KyyzhRqkJRA
