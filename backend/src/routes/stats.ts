import express, { Router } from 'express';
import { getStatsByUserId, getStatsQuizByUserId, getStatsByCategory, submitQuizAndSaveResult, updateSuccessRate, getStats } from '../controllers/statsController';




const router: Router = express.Router();

router.get('/stats/user/:idUser', getStatsByUserId);
router.get('/result/user/:userId/quiz/:quizId', getStatsQuizByUserId);
router.get('/stats/user/:idUser/category/:idCategory', getStatsByCategory);
router.get('/update-success-rate/:userId', updateSuccessRate);
router.get('/:userId', getStats);



router.post('/:id/submit', submitQuizAndSaveResult);



export default router;
