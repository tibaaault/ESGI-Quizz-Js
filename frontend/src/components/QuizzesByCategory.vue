<template>
  <div class="col-xl-10 mx-auto text-center">
    <div class="row">
      <div class="col-xl-12">
        <h1>
          Quiz de la category <u>{{ category?.libelle }}</u>
        </h1>
      </div>
      <div class="col-xl-4 mt-5" v-for="quiz in quizzes" :key="quiz.id">
        <RouterLink :to="'/quiz/' + quiz.id">
          <div class="card shadows shadow-lg color-card">
            <div class="card-body">
              <h5 class="card-title text-light">
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
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { Quiz } from "@/store/modules/quiz";
import { Category } from "@/store/modules/category";
import { useRoute } from "vue-router";



export default defineComponent({
  setup() {
    const quizzes = ref<Quiz[]>([]);
    const category = ref<Category | null>(null);
    const route = useRoute();

    const fetchQuizzesByCategory = async () => {
      try {
        const categoryId = route.params.categoryId;
        const response = await axios.get<Quiz[]>(
          `http://localhost:3001/quizzes/quizzes/${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        quizzes.value = response.data;
      } catch (error) {
        console.log("Error fetching quizzes", error);
      }
    };

    const fetchCategoryLibelle = async () => {
      try {
        const categoryId = route.params.categoryId;
        const response = await axios.get<Category>(
          `http://localhost:3001/categories/category/${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        category.value = response.data;
      } catch (error) {
        console.log("Error fetching category", error);
      }
    };

    onMounted(() => {
      fetchQuizzesByCategory();
      fetchCategoryLibelle();
    });

    return {
      quizzes,
      category,
    };
  },
});
</script>

<style scoped>
  .color-card {
background-color:  #9e8e7f;
}
</style>

