<template>
  <v-toolbar color="elevation-0 transparent">
    <v-spacer></v-spacer>
    <Cart />
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
