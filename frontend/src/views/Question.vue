<template>
  <div>
    <QuestionComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import QuestionComponent from "@/components/Question.vue";

export default defineComponent({
  name: "Question",
  components: {
    NavBarComponent,
    QuestionComponent,
  },
  setup() {
    const store = useStore();

    return {};
  },
});
</script>

<style scoped>
* {
  background-color: #E3D4C5;
  height: 100vh;
}
</style>
