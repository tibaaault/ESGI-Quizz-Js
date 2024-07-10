import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: {
    userId: number; // Adapter selon ce que vous stockez dans le JWT
  };
}

const secretKey = process.env.JWT_SECRET_KEY || 'b9138f1bc37e7ab2db18bd2098274d0820b68165ffff7b338ea74fd4a14dcc05';

// Middleware pour vérifier le token JWT
export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Error:', err);
      return res.status(403).json({ message: 'Forbidden' });
    }
    // Décode l'utilisateur du token et l'ajoute à l'objet de la requête
    req.user = decoded as { userId: number }; // Adapter selon ce que vous stockez dans le JWT
    next();
  });
}
