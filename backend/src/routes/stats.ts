import express, { Router } from 'express';
import { getStatsByUserId, getStatsQuizByUserId, getStatsByCategory, submitQuizAndSaveResult } from '../controllers/statsController';




const router: Router = express.Router();

router.get('/stats/user/:idUser', getStatsByUserId);
router.get('/result/user/:idUser/quiz/:idQuiz', getStatsQuizByUserId);
router.get('/stats/user/:idUser/category/:idCategory', getStatsByCategory);


router.post('/:id/submit', submitQuizAndSaveResult);



export default router;
