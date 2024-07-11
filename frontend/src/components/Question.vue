<template>
  <div>
    <div class="container">
      <div class="col-xl-10 pt-5 mx-auto">
        <div v-if="currentQuestion">
          <div class="card rounded rounded-6">
            <div
              class="card-title header-question rounded-top py-2 text-center"
            >
              <p class="lead">
                <b
                  >Question {{ currentQuestionIndex + 1 }} /
                  {{ questions.length }}</b
                >
              </p>
            </div>
            <div class="card-body py-2">
              <h4 class="text-center">{{ currentQuestion.libelle }}</h4>
            </div>
          </div>
          <div class="d-flex" style="height: 20px"></div>
          <div class="row">
            <div
              class="col-xl-6 mx-auto text-center p-5"
              v-for="answer in currentQuestion.answers"
              :key="answer.id"
            >
              <div
                class="card border border-dark rounded rounded-9"
                :class="{
                  'selected-answer': isSelectedAnswer(
                    currentQuestion.id,
                    answer.id
                  ),
                }"
                @click="selectAnswer(currentQuestion.id, answer.id)"
              >
                <div class="card-body py-5">
                  <p class="lead card-text">{{ answer.libelle }}</p>
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
import { defineComponent, ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { Question } from "@/store/modules/quiz";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Fonction pour extraire l'ID utilisateur à partir du token JWT
const getUserIdFromToken = (token: string): number | null => {
  if (!token) {
    return null;
  }
  const tokenParts = token.split(".");
  if (tokenParts.length < 2) {
    return null;
  }
  const payload = JSON.parse(atob(tokenParts[1]));
  return payload.userId ?? null;
};

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const quizId = ref(Number(route.params.quizId));
    const questions = ref<Question[]>([]);
    const currentQuestionIndex = ref(0);
    const selectedAnswers = ref<Record<number, number>>({});

    const fetchQuestionsAndAnswers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/quizzes/quiz/${quizId.value}/questions`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        let fetchedQuestions = response.data.map((question: Question) => {
          const shuffledAnswers = [...question.answers];
          shuffleArray(shuffledAnswers);
          return {
            ...question,
            answers: shuffledAnswers,
          };
        });

        shuffleArray(fetchedQuestions);
        questions.value = fetchedQuestions;
        // Shuffle the questions themselves
        shuffleArray(fetchedQuestions);

        questions.value = fetchedQuestions;
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    const selectAnswer = (questionId: number, answerId: number) => {
      selectedAnswers.value[questionId] = answerId;
    };

    const isSelectedAnswer = (questionId: number, answerId: number) => {
      return selectedAnswers.value[questionId] === answerId;
    };

    const nextQuestion = () => {
      if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
      }
    };

    const prevQuestion = () => {
      if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
      }
    };

    const calculateScore = () => {
  let score = 0;
  questions.value.forEach((question) => {
    const selectedAnswerId = selectedAnswers.value[question.id];
    const correctAnswer = question.answers.find(
      (answer) => answer.statut === true 
    );
    if (correctAnswer && selectedAnswerId === correctAnswer.id) {
      score++;
    }
  });
  return score;
};

    const submitQuiz = async () => {
      const score = calculateScore();
      const currentDate = new Date();
      const timeSpent = 0;
      try {
        // Récupérer le token JWT depuis localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const userId = getUserIdFromToken(token);

        await axios.post(
          `http://localhost:3001/stats/${quizId.value}/submit`,
          {
            answers: selectedAnswers.value,
            result: score,
            date: currentDate,
            time: timeSpent,
            userId: userId,
            quizzId: quizId.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Utiliser le token pour l'authentification
            },
          }
        );

        router.push(`/results/${quizId.value}`);
      } catch (error) {
        console.log("Error submitting quiz and saving result", error);
      }
    };

    onMounted(() => {
      fetchQuestionsAndAnswers();
    });

    const currentQuestion = computed(
      () => questions.value[currentQuestionIndex.value]
    );

    return {
      quizId,
      questions,
      currentQuestionIndex,
      currentQuestion,
      selectAnswer,
      isSelectedAnswer,
      nextQuestion,
      prevQuestion,
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
  color: white;
  font-weight: bold;
}

.btn-color {
  background-color: #9e8e7f;
  color: white;
}
</style>
