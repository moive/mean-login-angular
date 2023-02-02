import type { IDataUser, IUser } from '../auth/auth.interfaces';

export function FnDataUser(
  user: IUser,
  token: string,
  expiresIn?: number
): IDataUser {
  return {
    name: user.name,
    email: user.email,
    token,
    expiresIn: expiresIn ?? 2 * 60 * 60
  };
}
