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

      <v-divider></v-divider>

      <!-- Total -->
      <div>
        <v-subheader>Total</v-subheader>
        <div class="total">
          <span>{{ cart.length }} products</span>
          <span>{{ totalPrice }} euros</span>
        </div>
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="clearCart">Empty</v-btn>
        <v-btn color="primary" flat>Checkout</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { CLEAR_CART, REMOVE_FROM_CART } from '@/mutation-types';

export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.cart.map(product => product.price).reduce((acc, price) => acc + price, 0);
    },
  },
  methods: {
    clearCart() {
      this.$store.commit(CLEAR_CART);
    },
    removeFromCart(product) {
      this.$store.commit(REMOVE_FROM_CART, product);
    },
  },
};
</script>

<style scoped lang="scss">
.total {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
