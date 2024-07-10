import express, { Router } from 'express';
import { findMany, createQuiz, getQuizById, findQuizzesByCategory } from '../controllers/quizController';
import { getQuestionsByQuizId, createQuestion, createAnswer } from '../controllers/quizController';



const router: Router = express.Router();

router.get('/quizzes', findMany);
router.get('/quiz/:id', getQuizById);
router.get('/quizzes/:categoryId', findQuizzesByCategory);
router.get('/quiz/:quizId/questions', getQuestionsByQuizId);


router.post('/quiz', createQuiz);
router.post('/quiz/create/question', createQuestion);
router.post('/quiz/create/answer', createAnswer);



export default router;
