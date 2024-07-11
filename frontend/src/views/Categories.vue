<template>
  <NavBarComponent />
  <div class="color">
    <div class="d-flex" style="height: 100px;"></div>
    <div class="container">
      <h2>Categories</h2>
      <CategoryListComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import NavBarComponent from "@/components/NavBar.vue";
import CategoryListComponent from "@/components/CategoryList.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBarComponent,
    CategoryListComponent,
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
