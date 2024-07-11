<template>
  <div class="col-xl-11 mx-auto text-center">
    <div class="row">
      <div class="col-xl-4" v-for="quiz in quizzes" :key="quiz.id">
        <RouterLink :to="'/quiz/' + quiz.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ quiz.title + " - " + quiz.duration + " minutes" }}
              </h5>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { Quiz } from "@/store/modules/quiz";

export default defineComponent({
  data() {
    return {
      quizzes: [] as Quiz[],
    };
  },
  methods: {
    async fetchQuizzes() {
      try {
        const response = await axios.get("http://localhost:3001/quizzes/quizzes", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.quizzes = response.data as Quiz[];
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    },
  },
  created() {
    this.fetchQuizzes();
  },
});
</script>
