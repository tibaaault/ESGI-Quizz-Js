<template>
    <div>
      <NavBarComponent />
      <div class="container">
        <div class="col-xl-10 pt-5 mx-auto">
          <div class="card rounded rounded-6">
            <div class="card-title header-question rounded-top py-3 text-center">
              <p class="lead"><b>Résultats du Quiz</b></p>
            </div>
            <div class="card-body py-3">
              <div v-if="quizResult">
                <p><strong>Date:</strong> {{ quizResult.date }}</p>
                <p><strong>Temps écoulé:</strong> {{ quizResult.time }} minutes</p>
                <p><strong>Résultat:</strong> {{ quizResult.result }}%</p>
                <p><strong>Quiz:</strong> {{ quizResult.quizz.title }}</p>
                <!-- Afficher d'autres détails du résultat si nécessaire -->
              </div>
              <div v-else>
                <p>Chargement des résultats...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue';
  import { useStore } from '@/store';
  import { useRoute } from 'vue-router';
  import NavBarComponent from '@/components/NavBar.vue';
  
  export default defineComponent({
    name: 'QuizResults',
    components: {
      NavBarComponent,
    },
    setup() {
      const store = useStore();
      const route = useRoute();
      const quizId = parseInt(route.params.quizId as number);
  
      onMounted(() => {
        store.dispatch('quiz/fetchQuizResult', quizId);
      });
  
      const quizResult = computed(() => store.getters['quiz/quizResult']);
  
      return {
        quizResult,
      };
    },
  });
  </script>
  
  <style scoped>
  .header-question {
    background-color: #9e8e7f;
  }
  </style>
  