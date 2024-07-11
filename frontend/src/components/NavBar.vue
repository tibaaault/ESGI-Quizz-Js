<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" v-bind:href="''"> </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/categories" class="nav-link"
              >Categories</RouterLink
            >
          </li>
          <li class="nav-item"  v-if="isLoggedIn">
            <RouterLink to="/stats" class="nav-link">Stats</RouterLink>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="nav-item" v-if="!isLoggedIn">
        <RouterLink to="/login" class="btn btn-color">Se connecter</RouterLink>
      </div>
      <div class="nav-item" v-if="isLoggedIn">
        <RouterLink to="/dashboard" class="btn btn-color">Profil</RouterLink>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
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

    return {
      isLoggedIn,

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
