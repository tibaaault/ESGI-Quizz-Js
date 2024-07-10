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
          <div class="card shadows shadow-lg">
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
<!-- <script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { mapGetters, mapActions } from "vuex";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "QuizByCategoryComponent",
  components: {
    RouterLink,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const categoryId = computed(() => Number(route.params.categoryId));

    onMounted(() => {
      store.dispatch("category/fetchCategories"); 
      store.dispatch("quiz/fetchQuizzesByCategory", categoryId.value);
    });


    const quizzes = computed(() => store.getters["quiz/quizzes"]);
    const category = computed(() => store.getters["category/getCategoryById"](categoryId.value));

    return {
      quizzes,
      category,
    };
  },
});
</script> -->
