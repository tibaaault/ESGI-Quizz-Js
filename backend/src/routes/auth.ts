import express, { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/authController';
import { generateToken } from '../utils/jwtUtils';

const router: Router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/register', registerUser);

// Endpoint pour récupérer l'ID utilisateur à partir du token JWT
// router.get('/token', (req, res) => {
//     const token = req.headers.authorization?.split(' ')[1]; // Récupère le token JWT de l'en-tête Authorization
  
//     if (!token) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
  
//     const userId = getUserIdFromToken(token);
  
//     if (userId !== null) {
//       res.json({ userId });
//     } else {
//       res.status(401).json({ error: 'Invalid token' });
//     }
//   });
  


export default router;
