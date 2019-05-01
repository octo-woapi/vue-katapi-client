<template>
  <v-list two-line>
    <v-list-tile v-for="(product, i) in cart" :key="i">
      <v-list-tile-content>
        <v-list-tile-title>{{ product.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ product.price }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon @click="removeFromCart(product)">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
import { REMOVE_FROM_CART } from '@/mutation-types';

export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeFromCart(product) {
      this.$store.commit(REMOVE_FROM_CART, product);
    },
  },
};
</script>
