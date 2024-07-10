import http from "../http";

export const userService = {
  // Fonction pour récupérer tous les utilisateurs
  async getUsers() {
    try {
      const response = await http.get(`/users`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  // Fonction pour créer un utilisateur
  async createUser(user: { name: string; password: string; role: string }) {
    try {
      const response = await http.post(`/users`, user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  async login(username: string, password: string) {
    try {
      const response = await http.post(`/login`, { username, password });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
  async registerUser(username: string, password: string) {
    try {
      const response = await http.post('/register', { name: username, password });
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
};
