<template>
  <NavBarComponent />
  <div class="color">
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
.color {
  background-color: #e3d4c5;
  min-height: 100vh;
}
</style>
