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
                    <RouterLink :to="`/quiz/${quiz.id}/questions`">
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
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import globe from '@/assets/images/globe.jpg';
import { Quiz } from "@/store/modules/quiz";


export default defineComponent({
  setup() {
    const route = useRoute();
    const quizId = ref(Number(route.params.id));
    const quiz = ref< Quiz | null>(null);
    const globeUrl = globe;

  const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/quizzes/quiz/${quizId.value}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        quiz.value = response.data;
      } catch (error) {
        console.log("Error fetching quiz", error);
      }
    };
    onMounted(() => {
      fetchQuiz();
    });

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