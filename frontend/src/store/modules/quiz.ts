import { quizService } from '../../services/quizService';
import { Commit } from 'vuex';

export interface Quiz {
  id: number;
  title: string;
  duration: number;
}

export interface Question {
  id: number;
  libelle: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  libelle: string;
  statut: number; // 1 pour la bonne réponse, 0 pour les autres
}

export interface Stats {
  id: number;
  date: Date;
  time: number;
  result: number;
  userId: number;
  quizzId: number;
}
export interface QuizState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: number]: number };
  quizResult: number | null;
  stats: Stats[];
}

const state: QuizState = {
  quizzes: [],
  currentQuiz: null,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswers: {},
  quizResult: null,
  stats: [],
};


const getters = {
  quizzes: (state: QuizState) => state.quizzes,
  currentQuiz: (state: QuizState) => state.currentQuiz,
  questions: (state: QuizState) => state.questions,
  currentQuestion: (state: QuizState) => state.questions[state.currentQuestionIndex],
  selectedAnswer: (state: QuizState) => (questionId: number) => state.selectedAnswers[questionId],
  quizResult: (state: QuizState) => state.quizResult,
  stats: (state: QuizState) => state.stats,
};

export default {
  namespaced: true,
  state,
  getters,
};