// src/store/modules/user.ts
import { getUsers, createUser } from '../../services/userService';
import { Commit } from 'vuex';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  user: null | User;
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
  setUsers(state: UserState, users: User[]) {
    state.users = users;
  },
};

const actions = {
  async fetchUsers({ commit }: { commit: Commit }) {
    try {
      const users = await getUsers();
      commit('setUsers', users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  async createUser({ commit, dispatch }: { commit: Commit; dispatch: any }, user: { name: string; password: string; role: string }) {
    try {
      await createUser(user);
      dispatch('fetchUsers');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  },
};

const getters = {
  user: (state: UserState) => state.user,
  users: (state: UserState) => state.users,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
