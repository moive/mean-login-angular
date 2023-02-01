import { compare, hash } from 'bcryptjs';

const encrypted = async (pass: string): Promise<string> => {
  const password = await hash(pass, 12);
  return password;
};

const verified = async (pass: string, passHash: string): Promise<boolean> => {
  const passwordValid = await compare(pass, passHash);
  return passwordValid;
};

export { encrypted, verified };
