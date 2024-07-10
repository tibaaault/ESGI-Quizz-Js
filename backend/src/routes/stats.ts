import express, { Router } from 'express';
import { getStatsByUserId, getStatsQuizByUserId, getStatsByCategory } from '../controllers/statsController';




const router: Router = express.Router();

router.get('/stats/user/:idUser', getStatsByUserId);
router.get('/stats/user/:idUser/quiz/:idQuiz', getStatsQuizByUserId);
router.get('/stats/user/:idUser/category/:idCategory', getStatsByCategory);




export default router;
