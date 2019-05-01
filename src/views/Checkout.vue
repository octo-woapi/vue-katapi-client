<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <product-list />
        <total />
        <footer>
          <v-btn color="primary" @click="pay">
            Pay
          </v-btn>
        </footer>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import Total from '@/components/Total.vue';

export default {
  components: { ProductList, Total },
  methods: {
    pay() {},
  },
};
</script>

<style scoped>
footer {
  padding: 16px 0;
}
</style>
