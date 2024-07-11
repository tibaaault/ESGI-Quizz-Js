<template>
  <div class="col-xl-10 mx-auto text-center">
    <div class="row">
      <div
        class="col-xl-4 mb-5"
        v-for="category in categories"
        :key="category.id"
      >
        <RouterLink :to="'/category/' + category.id">
          <div class="card shadows shadow-lg color-card">
            <div class="card-body">
              <h5 class="card-title text-light">
                {{ category.libelle }}
              </h5>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { Category } from "@/store/modules/category";

export default defineComponent({
  data() {
    return {
      categories: [] as Category[],
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3001/categories/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.categories = response.data as Category[];
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    },
  },
  created() {
    this.fetchCategories();
  },
});
</script>

<style scoped>
.color-card {
  background-color:  #9e8e7f;;
}
</style>


