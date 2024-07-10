<template>
  <div class="d-flex" style="height:100px;"></div>
  <div class="col-xl-11 mx-auto text-center">
    <div class="row">
      <div class="col-xl-10 mx-auto" v-if="quiz">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title pb-5">
                {{ quiz.title }}
              </h3>
              <div class="row p-5">
                <div class="col-xl-6 col-sm">
                  <img :src="globeUrl" class="img-fluid rounded rounded-9" alt="Globe" />
                </div>
                <div class="col-xl-6 col-sm justify-content-center ">
                  <p class="card-text lead">
                    <p class="lead">
                      Le quizz dure environ : {{ quiz.duration }} minutes
                    </p>
                    <RouterLink :to="'/quiz/' + quiz.id + '/questions'">
                      <button class="btn btn-lg btn-color">Commencer</button>
                    </RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "@/store";
import globe from '@/assets/images/globe.jpg';


export default defineComponent({
  name: "QuizComponent",
  setup() {
    const route = useRoute();
    const store = useStore();
    const quizId = computed(() => Number(route.params.id));


    onMounted(() => {
      store.dispatch('quiz/fetchQuizById', quizId.value);
    });

    const quiz = computed(() => store.getters['quiz/currentQuiz']);

    const globeUrl = globe;

    return {
      quizId,
      quiz,
      globeUrl,
    };
  },
});
</script>

<style scoped>
.btn-color {
  background-color: #9e8e7f;
  color: white;
}
</style>