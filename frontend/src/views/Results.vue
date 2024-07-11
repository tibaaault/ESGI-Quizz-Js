<template>
  <div class="container">
    <div class="col-xl-10 pt-5 mx-auto text-center">
      <h1>Résultats du Quiz</h1>
      <p class="lead">Votre score est : {{ score }}/{{ totalQuestions }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

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
    const route = useRoute();
    const quizId = ref(Number(route.params.quizId));
    const score = ref(0);
    const totalQuestions = ref(0);

    const fetchResults = async () => {
      try {
         // Récupérer le token JWT depuis localStorage
         const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        // Extraire l'ID utilisateur à partir du token JWT
        const userId = getUserIdFromToken(token);

        const response = await axios.get(`http://localhost:3001/stats/result/user/${userId}/quiz/${quizId.value}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        score.value = response.data.score;
        totalQuestions.value = response.data.totalQuestions;
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    onMounted(() => {
      fetchResults();
    });

    return {
      score,
      totalQuestions,
    };
  },
});
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
}
</style>
