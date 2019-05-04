<template>
  <ul>
    <li v-for="(product, i) of $store.state.products" :key="i">
      <product v-bind="product" @add="addToCart(product)" />
    </li>
  </ul>
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
