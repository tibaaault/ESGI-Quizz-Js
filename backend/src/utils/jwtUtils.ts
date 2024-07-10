import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY || 'b9138f1bc37e7ab2db18bd2098274d0820b68165ffff7b338ea74fd4a14dcc05';

export function generateToken(payload: any): string {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}
