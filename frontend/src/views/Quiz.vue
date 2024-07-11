<template>
  <NavBarComponent />
  <div class="color">
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
.color {
  background-color: #e3d4c5;
  min-height: 100vh;
}
</style>