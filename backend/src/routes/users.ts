import express, { Router } from 'express';
import { createUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/authenticateToken';

const router: Router = express.Router();

router.post('/user', createUser);
// router.get('/user/profile', authenticateToken, getUserProfile);

export default router;
