<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <ul>
          <li v-for="product of products" :key="product.id">
            <product v-bind="product" />
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Product from '../components/Product.vue';
import productService from '../services/product-service';

export default {
  components: {
    Product,
  },
  data: () => ({
    products: [],
  }),
  async mounted() {
    this.products = await productService.listProducts();
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

li {
  margin: 8px;
  max-width: 128px;
}
</style>
