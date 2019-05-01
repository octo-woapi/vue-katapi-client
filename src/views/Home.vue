<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <ul>
          <li v-for="(product, i) of $store.state.products" :key="i">
            <product v-bind="product" @add="addToCart(product)" />
          </li>
        </ul>
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
      return this.$store.commit(ADD_TO_CART, product);
    },
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
