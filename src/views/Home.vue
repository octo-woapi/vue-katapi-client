<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <ul>
          <li v-for="(product, i) of $store.state.products" :key="i">
            <product v-bind="product" />
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
  components: {
    Product,
  },
  computed: {},
  created() {
    return this.$store.dispatch('fetchProducts');
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
