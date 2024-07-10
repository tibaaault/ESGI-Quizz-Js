// store/modules/user.ts

import { Commit } from 'vuex';

export interface User {
  id?: number;
  name: string;
  password: string;
  role: string;
}

export interface UserState {
  user: User | null;
  users: User[];
}

const state: UserState = {
  user: null,
  users: [],
};

const mutations = {
  setUser(state: UserState, user: User) {
    state.user = user;
  },
  clearUser(state: UserState) {
    state.user = null;
  },
};

const actions = {
  // Vos actions comme login, logout, etc.
};

const getters = {
  isAuthenticated: (state: UserState) => !!state.user,
  // Autres getters nécessaires
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
