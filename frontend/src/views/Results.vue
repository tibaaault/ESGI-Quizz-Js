<template>
    <div>
      <h1>Results</h1>
      <ul>
        <li v-for="result in results" :key="result.id">
          {{ result }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapState } from 'vuex';
 
  
  export default defineComponent({
    name: 'Results',
    computed: {
      ...mapState(['results'])
    },
    created() {
      this.fetchResults();
    },
    methods: {
      ...mapActions(['fetchResults'])
    }
  });
  </script>
  