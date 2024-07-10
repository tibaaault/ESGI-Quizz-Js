<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
      <h2>Create User</h2>
      <input
        type="text"
        v-model="newUser.name"
        placeholder="Name"
      />
      <input
        type="password"
        v-model="newUser.password"
        placeholder="Password"
      />
      <input
        type="text"
        v-model="newUser.role"
        placeholder="Role"
      />
      <button @click="handleCreateUser">Create</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        newUser: {
          name: '',
          password: '',
          role: ''
        }
      };
    },
    computed: {
      ...mapGetters(['users'])
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      ...mapActions(['fetchUsers', 'createUser']),
      handleCreateUser() {
        this.createUser(this.newUser).then(() => {
          this.newUser = { name: '', password: '', role: '' }; // Reset the form
        });
      }
    }
  };
  </script>
  