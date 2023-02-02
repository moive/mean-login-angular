export interface IJwtResponse {
  dataUser: {
    id: number;
    name: string;
    email: string;
    token: string;
    expiresIn: string;
  };
}
