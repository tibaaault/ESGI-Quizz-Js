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
import { defineComponent, onMounted } from "vue";
import { mapGetters, mapActions } from "vuex";
import { useStore } from "@/store";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "QuizListComponent",
  computed: {
    ...mapGetters("quiz", ["quizzes"]),
  },
  methods: {
    ...mapActions("quiz", ["fetchQuizzes"]),
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("quiz/fetchQuizzes");
    });
    return {};
  },
});
</script>
