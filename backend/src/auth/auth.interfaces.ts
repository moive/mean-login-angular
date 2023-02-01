export interface IAuth {
  email: string;
  password: string;
}

export interface IUser extends IAuth {
  name: string;
}
