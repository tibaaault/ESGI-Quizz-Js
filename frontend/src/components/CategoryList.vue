<template>
  <div class="col-xl-10 mx-auto text-center">
    <div class="row">
      <div
        class="col-xl-4 mb-5"
        v-for="category in categories"
        :key="category.id"
      >
        <RouterLink :to="'/category/' + category.id">
          <div class="card shadows shadow-lg">
            <div class="card-body">
              <h5 class="card-title">
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
import { defineComponent, onMounted } from "vue";
import { mapGetters, mapActions } from "vuex";
import { useStore } from "@/store";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "CategoriesComponent",
  computed: {
    ...mapGetters("category", ["categories"]),
  },
  methods: {
    ...mapActions("category", ["fetchCategories"]),
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("category/fetchCategories");
    });

    return {
    };
  },
});
</script>
