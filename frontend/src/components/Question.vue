<template>
  <div>
    <NavBarComponent />
    <div class="container">
      <div class="col-xl-10 pt-5 mx-auto">
        <div v-if="currentQuestion">
          <div class="card rounded rounded-6">
            <div
              class="card-title header-question rounded-top py-3 text-center"
            >
              <p class="lead">
                <b
                  >Question {{ currentQuestionIndex + 1 }} /
                  {{ questions.length }}</b
                >
              </p>
            </div>
            <div class="card-body py-3">
              <h4 class="text-center">{{ currentQuestion.libelle }}</h4>
            </div>
          </div>
          <div class="d-flex" style="height: 50px"></div>
          <div class="row">
            <div
              class="col-xl-6 mx-auto text-center p-5"
              v-for="answer in currentQuestion.answers"
              :key="answer.id"
            >
              <div
                class="card border border-dark rounded rounded-9"
             :class="{ 'selected-answer': isSelectedAnswer(currentQuestion.id, answer.id) }"
                @click="selectAnswer(currentQuestion.id, answer.id)"
              >
                <div class="card-body py-5">
                  <p class="lead card-text py-5">{{ answer.libelle }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="row mx-auto text-center">
              <div class="col-xl-6 col-sm">
                <button
                  @click="prevQuestion"
                  :disabled="currentQuestionIndex === 0"
                  class="btn btn-color btn-lg"
                >
                  Précédent
                </button>
              </div>
              <div class="col-xl-6 col-sm">
                <button
                  @click="nextQuestion"
                  :disabled="currentQuestionIndex >= questions.length - 1"
                  class="btn btn-color btn-lg"
                >
                  Suivant
                </button>
              </div>
            </div>
            <div class="col-xl-12 mx-auto text-center">
              <button
                class="btn btn-color btn-lg"
                @click="submitQuiz"
                v-if="currentQuestionIndex === questions.length - 1"
              >
                Terminer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "@/store";
import { useRoute, useRouter } from "vue-router";
import NavBarComponent from "@/components/NavBar.vue";

export default defineComponent({
  name: "Question",
  components: {
    NavBarComponent,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const quizId = parseInt(route.params.quizId as string);

    onMounted(() => {
      store.dispatch("quiz/fetchQuestionsResponses", quizId);
    });

    const quiz = computed(() => store.getters["quiz/quiz"]);
    const questions = computed(() => store.getters["quiz/questions"]);
    const currentQuestion = computed(
      () => store.getters["quiz/currentQuestion"]
    );
    const currentQuestionIndex = computed(
      () => store.state.quiz.currentQuestionIndex
    );

    const isSelectedAnswer = (questionId: number, answerId: number) => {
      return store.getters["quiz/selectedAnswer"](questionId) === answerId;
    };

    const nextQuestion = () => {
      store.commit("quiz/incrementQuestionIndex");
    };

    const prevQuestion = () => {
      store.commit("quiz/decrementQuestionIndex");
    };

    const selectAnswer = (questionId: number, answerId: number) => {
      store.commit("quiz/selectAnswer", { questionId, answerId });
    };

    const submitQuiz = async () => {
      await store.dispatch("quiz/submitQuiz", quizId);
      router.push("/results/${store.state.quiz.quiz?.id}");
    };

    return {
      quiz,
      questions,
      currentQuestion,
      currentQuestionIndex,
      isSelectedAnswer,
      nextQuestion,
      prevQuestion,
      selectAnswer,
      submitQuiz,
    };
  },
});
</script>

<style scoped>
.header-question {
  background-color: #9e8e7f;
}

.selected-answer {
  background-color: #9e8e7f;
}

.btn-color {
 background-color: #9e8e7f;
  color: white;
}
</style>
