import express, { Router } from 'express';
import { findMany, getCategoryById } from '../controllers/categoryController';




const router: Router = express.Router();

// router.post('/categories', findMany);
router.get('/categories', findMany);
router.get('/category/:id', getCategoryById);


export default router;
