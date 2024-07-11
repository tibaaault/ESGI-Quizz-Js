<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-xl-4 mx-auto card">
          <div class="card-body">
            <h3 class="card-title text-center">Votre taux de réussite moyen</h3>
            <div class="text-center">
              <h2>{{ averageSuccessRate.toFixed(2) }}%</h2>
            </div>
          </div>
        </div>
        <div class="col-xl-4 mx-auto card">
          <div class="card-body">
            <h3 class="card-title text-center">Nombre de Quiz passés</h3>
            <div class="text-center">
              <h2>{{ totalQuizzes }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

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
    const route = useRoute();
    const averageSuccessRate = ref<number>(0);
    const totalQuizzes = ref<number>(0);
    const successRates = ref<number[]>([]);

    const fetchStats = async () => {
      try {

        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }
        const userId = getUserIdFromToken(token);

        const response = await axios.get<any>(
          `http://localhost:3001/stats/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );



        if (response.data) {
          averageSuccessRate.value = response.data.successRate;
          totalQuizzes.value = response.data.totalQuizzes;
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    onMounted(() => {
      fetchStats();
    });

    return {
      averageSuccessRate,
      totalQuizzes,
    };
  },
});
</script>

<style scoped></style>
