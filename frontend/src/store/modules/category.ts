import { categoryService } from '../../services/categoryService';
import { Commit } from 'vuex';

export interface Category {
  id: number;
  libelle: string;
}

export interface CategoryState {
  categories: Category[];
}

const state: CategoryState = {
  categories: [],
};

const mutations = {
  setCategories(state: CategoryState, categories: Category[]) {
    state.categories = categories;
  },
};

const actions = {
  async fetchCategories({ commit }: { commit: Commit }) {
    try {
      const categories = await categoryService.fetchCategories();
      commit('setCategories', categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
};

const getters = {
  categories: (state: CategoryState) => state.categories,
  getCategoryById: (state: CategoryState) => (categoryId: number) => {
    return state.categories.find(cat => cat.id === categoryId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
