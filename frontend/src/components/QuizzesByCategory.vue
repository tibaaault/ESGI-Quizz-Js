<template>
  <div class="col-xl-10 mx-auto text-center">
    <div class="row">
      <div class="col-xl-12">
        <h1>Quiz de la category <u>{{ category.libelle }}</u></h1>
      </div>
      <!-- <h1>Quiz de la category {{ category.libelle }}</h1> -->
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
</script>
