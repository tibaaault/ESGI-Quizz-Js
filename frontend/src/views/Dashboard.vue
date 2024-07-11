<template>
  <div class="color">
    <NavBarComponent />
    <DashboardContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import DashboardContent from "@/components/Dashboard.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    NavBarComponent,
    DashboardContent,
  },
  setup() {
    const store = useStore();

    return {};
  },
});
</script>

<style scoped>
/* Styles spécifiques au Dashboard */
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.color {
  background-color: #e3d4c5;
  min-height: 100vh;
}
</style>
