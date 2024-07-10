<template>
  <NavBarComponent />
  <div class="quiz">
    <QuizComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import QuizComponent from "@/components/Quiz.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBarComponent,
    QuizComponent,
  },
  setup() {
    const store = useStore();

    return {};
  },
});
</script>

<style scoped>
.quiz {
  background-color: #E3D4C5;
  height: 100vh;
}
</style>