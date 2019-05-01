<template>
  <div>
    <v-subheader>Total</v-subheader>
    <div class="total">
      <span>{{ $store.state.cart.length }} products</span>
      <span>{{ totalPrice }} euros</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.state.cart
        .map(product => product.price)
        .reduce((acc, price) => acc + price, 0);
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
