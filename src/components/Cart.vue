<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Doe</v-list-tile-title>
            <v-list-tile-sub-title>Shopping cart</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <template v-if="cart && cart.length">
        <v-divider></v-divider>
        <product-list />
      </template>

      <v-divider></v-divider>

      <!-- Total -->
      <total />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="clearCart">Empty</v-btn>
        <v-btn color="primary" flat to="/checkout">Checkout</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import Total from '@/components/Total.vue';
import { CLEAR_CART } from '@/mutation-types';

export default {
  components: { Total, ProductList },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    clearCart() {
      this.$store.commit(CLEAR_CART);
    },
  },
};
</script>
