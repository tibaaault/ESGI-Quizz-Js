<template>
  <NavBarComponent />
  <div class="color">
    <div class="d-flex" style="height: 100px"></div>
    <div class="container">
      <LoginFormComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import LoginFormComponent from "@/components/Login.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBarComponent,
    LoginFormComponent,
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
  height: 100vh;
}
</style>
