<template>
  <div>
    <NavBarComponent />
    <div class="color">
      <div class="d-flex" style="height: 100px"></div>
      <div class="container">
        <div class="col-xl-8 col-sm bg-light rounded rounded-6 p-5 mx-auto text-center">
          <h1 class="mb-3">Résultats du Quiz {{ quizName }}</h1>
          <div v-if="results.length > 0">
            <div
              v-for="(result, index) in results"
              :key="index"
              class="result-item"
            >
              <div class="card mb-5 border border-dark color-card py-3">
                <p class="h5 text-light">Résultat {{ index + 1 }} :</p>
                <p class="lead text-light">
                  Votre score : {{ result.result }} /
                  {{ questions.length }}
                </p>
                <p class="lead text-light">Date : {{ new Date(result.date).toLocaleString() }}</p>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Aucun résultat trouvé.</p>
          </div>
        </div>
      </div>
      <div class="d-flex" style="height: 100px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import NavBarComponent from "@/components/NavBar.vue";
import { Question } from "@/store/modules/quiz";


interface QuizResult {
  id: number;
  date: string;
  time: number;
  result: number;
  userId: number;
  quizzId: number;
  quizName: string;
  totalQuestions: number;
}

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
  components: {
    NavBarComponent,
  },
  setup() {
    const route = useRoute();
    const quizId = ref(Number(route.params.quizId));
    const quizName = ref("");
    const results = ref<QuizResult[]>([]);
    const questions = ref<Question[]>([]);

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
      questions.value = response.data;
      console.log("questions", questions.value);

      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    const fetchQuizDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const response = await axios.get(
          `http://localhost:3001/quizzes/quiz/${quizId.value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        quizName.value = response.data.title;
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };

    const fetchResults = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }
        const userId = getUserIdFromToken(token);

        const response = await axios.get(
          `http://localhost:3001/stats/result/user/${userId}/quiz/${quizId.value}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        results.value = response.data.map((item: any) => ({
          ...item,
          quizName: quizName.value,
          totalQuestions: item.totalQuestions,
        })).sort((a: QuizResult, b: QuizResult) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    onMounted(() => {
      fetchQuestionsAndAnswers();
      fetchQuizDetails();
      fetchResults();
    });

    return {
      results,
      quizName,
      questions,
    };
  },
});
</script>

<style scoped>
.color {
  background-color: #e3d4c5;
  min-height: 100vh;
}

.color-card {
  background-color: #9e8e7f;
}
</style>