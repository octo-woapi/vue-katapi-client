<template>
  <section v-if="order">
    <header class="order__header">
      <h2>Order #{{ order.id }}</h2>
      <v-chip
        v-for="(status, i) of statuses"
        v-if="status.text.toLowerCase() === order.status"
        :key="i"
        :color="status.color"
      >
        {{ status.text }}
      </v-chip>
    </header>
    <main class="order__info">
      <p>Weight: {{ order.total_weight }} kg</p>
      <p>Shipment cost: {{ order.shipment_amount }} euros</p>
      <p>Total: {{ order.total_amount }} euros</p>
    </main>
    <footer class="order__actions" v-if="order.status === 'pending'">
      <v-btn @click="$store.dispatch('cancel', order)">Cancel</v-btn>
      <v-btn color="primary" @click="$store.dispatch('pay', order)">
        Pay
        <v-icon right>payment</v-icon>
      </v-btn>
    </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    statuses: [
      { color: 'blue', text: 'Pending' },
      { color: 'green', text: 'Paid' },
      { color: 'red', text: 'cancelled' },
    ],
  }),
  computed: {
    order() {
      return this.$store.state.order;
    },
  },
  async created() {
    const { id } = this.$route.params;
    await this.$store.dispatch('fetchOrder', id);
  },
};
</script>

<style scoped>
.order__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
