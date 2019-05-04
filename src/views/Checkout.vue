<template>
  <div v-if="$store.state.cart && $store.state.cart.length">
    <product-list />
    <total />
    <footer>
      <v-btn color="primary" @click="order">
        Order now
      </v-btn>
    </footer>
  </div>
  <div v-else>
    <p>There is no product in your cart yet. Add some <router-link to="/">here</router-link>.</p>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import Total from '@/components/Total.vue';

export default {
  components: { ProductList, Total },
  methods: {
    async order() {
      const location = await this.$store.dispatch('order');
      this.$router.replace(location);
    },
  },
};
</script>

<style scoped>
footer {
  padding: 16px 0;
}
</style>
