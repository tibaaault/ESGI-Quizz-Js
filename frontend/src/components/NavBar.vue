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
          <li class="nav-item">
            <!-- <RouterLink to="/stats" class="nav-link">Stats</RouterLink> -->
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <p v-if="!isAuthenticated">
          <RouterLink to="/login">Se connecter</RouterLink>
        </p>
        <p v-if="isAuthenticated">
          <RouterLink to="/profile">Profile</RouterLink>
          <button @click="handleLogout">Logout</button>
        </p>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "NavBarComponent",
  setup() {
    const store = useStore();
    const isAuthenticated = store.getters["user/isAuthenticated"]; // Utilisation de getters spécifiques au module 'user'

    const handleLogout = () => {
      store.dispatch("user/logout"); // Dispatch de l'action de logout du module 'user'
    };

    return {
      isAuthenticated,
      handleLogout,
    };
  },
});
</script>
