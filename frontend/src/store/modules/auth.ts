import { Module } from 'vuex';

interface User {
  username: string;
  password: string;
}

const authModule: Module<any, any> = {
  namespaced: true,

  actions: {
    async login({ commit }: { commit: any }, credentials: User) {
      try {
        // Simulated login logic for demonstration
        console.log(`Logging in with username: ${credentials.username}`);
        // Normally you would call an API here to perform the login and get a token
        const token = 'mocked_token';
        const user = { username: credentials.username }; // Mocked user data

        return { token, user };
      } catch (error) {
        throw new Error(`Login failed: ${error}`);
      }
    },
  },
};

export default authModule;
