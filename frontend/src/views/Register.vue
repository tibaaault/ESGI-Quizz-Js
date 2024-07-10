<template>
    <NavBarComponent />
    <div class="color">
      <div class="d-flex" style="height: 100px"></div>
      <div class="container">
        <Register />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useStore } from "@/store";
  import NavBarComponent from "@/components/NavBar.vue";
  import RegisterFormComponent from "@/components/Register.vue";
  
  export default defineComponent({
    name: "Register",
    components: {
      NavBarComponent,
      RegisterFormComponent,
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
  