<template>
  <div class="container mx-auto">
    <div class="col-xl-4 card p-5 mx-auto">
      <h2 class="pb-3">Login</h2>
      <form @submit.prevent="login">
        <div class="pb-4">
          <label for="username">Username:</label><br />
          <input
            class="form-control"
            v-model="username"
            id="username"
            type="text"
            required
          />
        </div>
        <div class="pb-4">
          <label for="password">Password:</label><br />
          <input
            class="form-control"
            v-model="password"
            id="password"
            type="text"
            required
          />
        </div>
        <button class="btn btn-lg btn-color" type="submit">Login</button>
      </form>
    </div>
    <div class="col-xl-4 p-5 mx-auto text-center">
      <router-link to="/register" class="btn btn-lg btn-color"
        >Register</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    const login = async () => {
      try {
        const response = await axios.post("http://localhost:3001/auth/login", {
          name: username.value,
          password: password.value,
        });

        const token = response.data.token;

        if (token) {
          localStorage.setItem("token", token);
          console.log("Login successful!");
          router.push("/dashboard");
        }
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          console.error("Request failed with status:", error.response?.status);
          console.error("Error message:", error.response?.data.message);
        } else {
          console.error("Unexpected error:", error.message);
        }
      }
    };

    return {
      username,
      password,
      login,
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
