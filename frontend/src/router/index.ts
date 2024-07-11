import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Quizzes from "../views/Quizzes.vue";
import Quiz from "../views/Quiz.vue";
import Question from "../views/Question.vue";
import Results from "../views/Results.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Stats from "../views/Stats.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/category/:categoryId",
    name: "Quizzes",
    component: Quizzes,
  },
  {
    path: "/quiz/:id",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/quiz/:quizId/questions",
    name: "Question",
    component: Question,
    meta: { requiresAuth: true },  
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },  
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
    meta: { requiresAuth: true },
  },
  {
    path: "/results/:quizId",
    name: "QuizResults",
    component: Results,

  },
    
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    next("/login");
  } else {
    next();
  }
});

export default router;
