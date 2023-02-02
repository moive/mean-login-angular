import type { IResponsePromise, IUser } from '../auth/auth.interfaces';

export function FnDataUserSuccess(
  user: IUser,
  token: string,
  expiresIn?: number
): IResponsePromise {
  return {
    ok: true,
    user: {
      name: user.name,
      email: user.email,
      token,
      expiresIn: expiresIn ?? 2 * 60 * 60
    }
  };
}
