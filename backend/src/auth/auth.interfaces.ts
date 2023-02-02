export interface IAuth {
  email: string;
  password: string;
}

export interface IUser extends IAuth {
  name: string;
}
export interface IDataUser {
  name: string;
  email: string;
  token: string;
  expiresIn: number;
}

export interface IResponsePromise {
  ok: boolean;
  message?: string;
  user?: IDataUser;
}
