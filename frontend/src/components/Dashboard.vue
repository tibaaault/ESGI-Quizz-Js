<template>
  <div class="container mx-auto">
    <div class="d-flex" style="height: 100px"></div>
    <div class="col-xl-4 card p-5 mx-auto text-center">
      <h2 class="pb-3">Vous êtes connecté</h2>
      <div class="nav-item" v-if="isLoggedIn">
        <button class="btn btn-color" @click="logout">Déconnexion</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

export default defineComponent({
  name: "NavBar",
  setup() {
    const router = useRouter();

    const isLoggedIn = computed(() => {
      const token = localStorage.getItem("token");
      return !!token; 
    });

    // Fonction de déconnexion
    const logout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };

    return {
        isLoggedIn,
      logout,
    };
  },
});
</script>


<style scoped>
.btn-color {
  background-color: #9e8e7f;
  color: white;
}
</style>
