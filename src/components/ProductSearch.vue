<!-- ProductSearch.vue -->
<template>
    <div class="input-group mb-3 search">
        <div class="input-group-prepend">
            <span class="input-group-text material-symbols-outlined">search</span>
        </div>
        <input type="text" class="form-control" v-model="searchQuery" @input="search" placeholder="Search products" />
    </div>
  </template>
  
  <style>
    .search .input-group {
      width: 100%;
      font-size: 16px;
      padding: 12px 20px 12px 40px;
    }
  </style>

  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchQuery);
      }
    }
  };
  </script>