export interface IJwtResponse {
  user: {
    id: number;
    name: string;
    email: string;
    token: string;
    expiresIn: string;
  };
}
