<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 xl3 v-for="(product, i) of $store.state.products" :key="i">
        <product v-bind="product" @add="addToCart(product)" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Product from '@/components/Product.vue';
import { ADD_TO_CART } from '@/mutation-types';

export default {
  components: {
    Product,
  },
  created() {
    return this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart(product) {
      this.$store.commit(ADD_TO_CART, product);
    },
  },
};
</script>
