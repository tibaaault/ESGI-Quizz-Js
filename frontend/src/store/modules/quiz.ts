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

// const mutations = {
//   setQuizzes(state: QuizState, quizzes: Quiz[]) {
//     state.quizzes = quizzes;
//   },
//   setCurrentQuiz(state: QuizState, quiz: Quiz) {
//     state.currentQuiz = quiz;
//   },
//   setQuestions(state: QuizState, questions: Question[]) {
//     state.questions = questions;
//   },
//   setCurrentQuestionIndex(state: QuizState, index: number) {
//     state.currentQuestionIndex = index;
//   },
//   incrementQuestionIndex(state: QuizState) {
//     if (state.currentQuestionIndex < state.questions.length - 1) {
//       state.currentQuestionIndex++;
//     }
//   },
//   decrementQuestionIndex(state: QuizState) {
//     if (state.currentQuestionIndex > 0) {
//       state.currentQuestionIndex--;
//     }
//   },
//   selectAnswer(state: QuizState, { questionId, answerId }: { questionId: number; answerId: number }) {
//     state.selectedAnswers = {
//       ...state.selectedAnswers,
//       [questionId]: answerId,
//     };
//   },
//   resetQuizState(state: QuizState) {
//     state.questions = [];
//     state.currentQuestionIndex = 0;
//     state.selectedAnswers = {};
//     state.quizResult = null;
//     state.stats = [];
//   },
//   setQuizResult(state: QuizState, quizResult: number) {
//     state.quizResult = quizResult;
//   },
//   setStats(state: QuizState, stats: Stats[]) {
//     state.stats = stats;
//   },
// };

// const actions = {
//   async fetchQuizzes({ commit }: { commit: Commit }) {
//     try {
//       const quizzes = await quizService.fetchQuizzes();
//       commit('setQuizzes', quizzes);
//     } catch (error) {
//       console.error('Error fetching quizzes:', error);
//     }
//   },
//   async fetchQuizzesByCategory({ commit }: { commit: Commit }, categoryId: number) {
//     try {
//       const quizzes = await quizService.fetchQuizzesByCategory(categoryId);
//       commit('setQuizzes', quizzes);
//     } catch (error) {
//       console.error('Error fetching quizzes by category:', error);
//     }
//   },
//   async fetchQuizById({ commit }: { commit: Commit }, id: number) {
//     try {
//       const quiz = await quizService.fetchQuizById(id);
//       commit('setCurrentQuiz', quiz);
//     } catch (error) {
//       console.error('Error fetching quiz by ID:', error);
//     }
//   },
//   async fetchQuestionsResponses({ commit }: { commit: Commit }, quizId: number) {
//     try {
//       const questionsResponses = await quizService.fetchQuestionsResponses(quizId);
//       commit('setQuestions', questionsResponses);
//       commit('setCurrentQuestionIndex', 0);
//     } catch (error) {
//       console.error('Error fetching questions and responses:', error);
//     }
//   },
//   async fetchQuizResult({ commit }: { commit: Commit }, quizId: number) {
//     try {
//       const quizResult = await quizService.fetchQuizResult(quizId);
//       commit('setQuizResult', quizResult);
//     } catch (error) {
//       console.error('Error fetching quiz result:', error);
//     }
//   },
//   async fetchUserQuizStats({ commit }: { commit: Commit }, { userId, quizId }: { userId: number; quizId: number }) {
//     try {
//       const stats = await quizService.fetchUserQuizStats(userId, quizId);
//       commit('setStats', stats);
//     } catch (error) {
//       console.error('Error fetching user quiz stats:', error);
//     }
//   },
//   async submitQuiz({ commit, state }: { commit: Commit; state: QuizState }, userId: number) {
//     try {
//       const correctAnswers = state.questions.filter((q) =>
//         q.answers.some((a) => a.id === state.selectedAnswers[q.id] && a.statut === 1)
//       ).length;
//       const result = {
//         date: new Date(),
//         time: 0, // Temps à 0 pour l'instant
//         result: correctAnswers,
//         userId: userId,
//         quizzId: state.currentQuiz?.id || 0,
//       };
//       await quizService.saveQuizResult(result);
//       commit('resetQuizState');
//     } catch (error) {
//       console.error('Error submitting quiz:', error);
//     }
//   },
// };


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
  // mutations,
  // actions,
  getters,
};