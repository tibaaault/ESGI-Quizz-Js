<template>
  <NavBarComponent />
  <div class="color">
    <div class="d-flex" style="height: 100px;"></div>
    <div class="container">
      <QuizzesByCategoryComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import NavBarComponent from "@/components/NavBar.vue";
import QuizzesByCategoryComponent from "@/components/QuizzesByCategory.vue";

export default defineComponent({
  name: "Quizzes",
  components: {
    NavBarComponent,
    QuizzesByCategoryComponent,
  },
});
</script>

<style scoped>
.color {
  background-color: #e3d4c5;
  height: 100vh;
}
</style>

