import http from '../http';

export const quizService = {
  async fetchQuizzes() {
    try {
      const response = await http.get('/quizzes');
      return response.data;
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      throw error;
    }
  },
  
  async fetchQuizzesByCategory(categoryId: number) {
    try {
      const response = await http.get(`/category/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching quizzes for category ${categoryId}:`, error);
      throw error;
    }
  },

  async fetchQuizById(quizId: number) {
    try {
      const response = await http.get(`/quiz/${quizId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching quiz with id ${quizId}:`, error);
      throw error;
    }
  },

  async fetchQuestionsResponses(quizId: number) {
    try {
      const response = await http.get(`/quiz/${quizId}/questions`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching questions and responses for quiz ${quizId}:`, error);
      throw error;
    }
  },
  async saveQuizResult(result: { date: Date, time: number, result: number, userId: number, quizzId: number }) {
    try {
      const response = await http.post('/stats', result);
      return response.data;
    } catch (error) {
      console.error('Error saving quiz result:', error);
      throw error;
    }
  },
  async fetchQuizResult(quizId: number) {
    try {
      const response = await http.get(`/quiz/${quizId}/results`); 
      return response.data;
    } catch (error) {
      console.error(`Error fetching quiz result for quiz ${quizId}:`, error);
      throw error;
    }
  },
  async fetchUserQuizStats(userId: number, quizId: number) {
    try {
      const response = await http.get(`/stats/user/${userId}/quiz/${quizId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user quiz stats for user ${userId} and quiz ${quizId}:`, error);
      throw error;
    }
  },
};
