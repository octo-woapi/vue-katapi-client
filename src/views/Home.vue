<template>
  <v-container id="dropdown" fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs4>
        <p>Filters</p>
        <v-overflow-btn
          :items="items"
          label="Sort products"
          target="#dropdown"
          @change="filter => $store.dispatch('fetchProducts', filter)"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>
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
  data: () => ({
    items: ['name', 'price', 'weight'],
  }),
  created() {
    return this.$store.dispatch('fetchProducts');
  },
  methods: {
    test(value) {
      console.log(value);
    },
    addToCart(product) {
      this.$store.commit(ADD_TO_CART, product);
    },
  },
};
</script>
