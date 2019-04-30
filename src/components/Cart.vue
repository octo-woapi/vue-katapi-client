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

      <v-divider></v-divider>

      <template v-if="$store.state.cart && $store.state.cart.length">
        <v-list>
          <v-list-tile v-for="(product, i) in $store.state.cart" :key="i">
            <v-list-tile-title>{{ product.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </template>
      <template v-else>
        <p>You have no product yet.</p>
      </template>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" flat @click="menu = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {};
</script>
