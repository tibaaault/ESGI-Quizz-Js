import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import user from './modules/user';
import quiz from './modules/quiz';
import category from './modules/category';
import { UserState } from './modules/user';
import { QuizState } from './modules/quiz';
import { CategoryState } from './modules/category';


export interface RootState {
  user: UserState;
  category: CategoryState;
  quiz: QuizState;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

const store: Store<RootState> = createStore<RootState>({
  modules: {
    user,
    quiz,
    category,    
  },
});

export default store;

export function useStore() {
  return baseUseStore(key);
}
