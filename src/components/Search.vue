<!-- App.vue -->
<template>
    <div>
      <ProductSearch @search="handleSearch" />
      <ShoppingList v-if="searchQuery" :products="filteredProducts" />
    </div>
</template>

<style>

</style>
<script>
  import ProductSearch from './ProductSearch.vue';
  import ShoppingList from './ShoppingList.vue';
  const jsonData = await import("@/assets/A.json");
  
  export default {
    components: {
      ProductSearch,
      ShoppingList
    },
    data() {
      return {
        products: [],
        searchQuery: ''
      };
    },
    computed: {
      filteredProducts() {
        if (this.searchQuery) {
          return this.products.filter(product =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return [];
      }
    },
    methods: {
      handleSearch(query) {
        this.searchQuery = query;
      }
    },
    mounted() {
      this.products = jsonData.shelfs.flatMap(shelf => shelf.products);
    }
  };
</script>