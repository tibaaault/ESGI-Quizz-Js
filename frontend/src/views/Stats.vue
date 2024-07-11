<template>
  <NavBarComponent />
  <div class="color">
    <div class="d-flex" style="height: 100px"></div>
    <StatsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import StatsComponent from "@/components/Stats.vue";

export default defineComponent({
  name: "Stats",
  components: {
    NavBarComponent,
    StatsComponent,
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
