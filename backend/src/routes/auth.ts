import express, { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/authController';
import { generateToken } from '../utils/jwtUtils';

const router: Router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/register', registerUser);

  


export default router;
