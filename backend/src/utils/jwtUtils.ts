import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode'; 

const secretKey = process.env.JWT_SECRET_KEY || 'b9138f1bc37e7ab2db18bd2098274d0820b68165ffff7b338ea74fd4a14dcc05';

interface DecodedToken {
  userId: number;
}
// Fonction pour générer un token JWT
export function generateToken(payload: any): string {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// // Fonction pour décoder le token JWT et récupérer l'ID utilisateur
// export function getUserIdFromToken(token: string): number | null {
//   try {
//     const decoded: DecodedToken = jwtDecode(token);
//     return decoded.userId; // Retourne l'ID utilisateur extrait du token
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
