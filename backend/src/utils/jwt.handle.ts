import { type JwtPayload, sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env['JWT_SECRET'] ?? 'token01010';
const expiresIn = 24 * 60 * 60;

const generateToken = (id: string): string => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn });
  return jwt;
};

const verifyToken = (token: string): string | JwtPayload => {
  const isOk = verify(token, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
