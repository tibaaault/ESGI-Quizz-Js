import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Categories from '../views/Categories.vue';
import Quizzes from '../views/Quizzes.vue';
import Quiz from '../views/Quiz.vue';
import Question from '../views/Question.vue';
import Results from '../views/Results.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:categoryId',
    name: 'Quizzes',
    component: Quizzes,
  },
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: Quiz,
    // props: true,
  },
  {
    path: '/quiz/:quizId/questions',
    name: 'Question',
    component: Question,
    props: true,
  },
  {
    path: '/results/:quizId',
    name: 'QuizResults',
    component: Results,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
