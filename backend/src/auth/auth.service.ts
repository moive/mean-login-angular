import { encrypted, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';
import type { IAuth, IUser } from './auth.interfaces';

import User from './auth.model';

const registerUser = async ({
  email,
  password,
  name
}: IUser): Promise<string | IUser> => {
  const checkIs = await User.findOne({ email });
  if (checkIs != null) return 'ALREADY_REGISTERED';

  const passHash = await encrypted(password);

  const registerUser = await User.create({
    email,
    password: passHash,
    name
  });

  return registerUser;
};

const loginUser = async ({ email, password }: IAuth): Promise<string> => {
  const checkIs = await User.findOne({ email });

  if (checkIs == null) return 'NOT FOUND USER';

  const passHash = checkIs.password;
  const isCorrect = await verified(password, passHash);

  if (!isCorrect) return 'PASSWORD INCORRECT';

  const token = generateToken(checkIs.id as string);

  return token;
};

export { registerUser, loginUser };
