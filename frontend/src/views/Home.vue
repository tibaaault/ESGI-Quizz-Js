<template>
  <NavBarComponent />
  <div class="container-fluid color">
    <div class="col-xl-10 mx-auto">
      <div class="d-flex" style="height: 50px"></div>
      <h1 class="text-center">Bienvenue sur Quizz Me !</h1>
      <div class="d-flex" style="height: 100px"></div>
      <!-- Afficher seulement 3 -->
      <div class="card p-4 mb-5">
        <h2 class="pb-3">Categories</h2>
        <CategoryListComponent :limit="3" class="py-3"/>
      </div>
      <div class="card p-4">
        <h2 class="">Quizz</h2>
        <QuizListComponent :limit="6" class="py-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import QuizListComponent from "@/components/QuizList.vue";
import CategoryListComponent from "@/components/CategoryList.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBarComponent,
    CategoryListComponent,
    QuizListComponent,
  },
  setup() {
    const store = useStore();

    return {};
  },
});
</script>

<style scoped>
.color {
  background-color: #e3d4c5;
  min-height: 100vh;
}

h2 {
  font-family: kalam;
}
</style>
