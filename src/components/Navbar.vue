<template>
  <v-toolbar color="elevation-0 transparent">
    <v-btn icon to="/">
      <v-icon>home</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <Cart />
    <v-btn icon to="/orders">
      <v-icon>receipt</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
  components: {
    Cart,
  },
};
</script>

<style>
.v-toolbar__content {
  margin: 0 auto;
  width: 70%;
}
</style>
