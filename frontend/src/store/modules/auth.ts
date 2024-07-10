// store/modules/auth.ts

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
        // Call API to authenticate user
        const response = await fetch('auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const { token, user } = await response.json();

        // Commit user data to Vuex state
        commit('user/setUser', user, { root: true });

        // Return token and user data
        return { token, user };
      } catch (error) {
        console.error('Login failed:', error);
        throw new Error(`Login failed: ${error}`);
      }
    },
  },
};

export default authModule;
