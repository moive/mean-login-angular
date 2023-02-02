import { FnDataUser } from '../utils/common.handle';
import { encrypted, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';
import type { IAuth, IResponsePromise, IUser } from './auth.interfaces';

import User from './auth.model';

const registerUser = async ({
  email,
  password,
  name
}: IUser): Promise<IResponsePromise> => {
  const checkIs = await User.findOne({ email });
  if (checkIs != null) return { ok: false, message: 'ALREADY_REGISTERED' };

  const passHash = await encrypted(password);

  const registerUser = await User.create({
    email,
    password: passHash,
    name
  });

  const token = generateToken(registerUser.id);

  return { ok: true, user: FnDataUser(registerUser, token) };
};

const loginUser = async ({
  email,
  password
}: IAuth): Promise<IResponsePromise> => {
  const checkIs = await User.findOne({ email });

  if (checkIs == null) return { ok: false, message: 'NOT FOUND USER' };

  const passHash = checkIs.password;
  const isCorrect = await verified(password, passHash);

  if (!isCorrect) return { ok: false, message: 'PASSWORD INCORRECT' };

  const token = generateToken(checkIs.id as string);

  return { ok: true, user: FnDataUser(checkIs, token) };
};

export { registerUser, loginUser };
