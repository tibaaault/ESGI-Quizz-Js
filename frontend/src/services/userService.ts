import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Remplacez par l'URL de votre API si elle est différente

// Fonction pour récupérer tous les utilisateurs
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fonction pour créer un utilisateur
export const createUser = async (user: { name: string; password: string; role: string }) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
