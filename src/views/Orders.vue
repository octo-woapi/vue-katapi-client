<template>
  <div>
    <ul class="filters">
      <li v-for="(filter, i) of filters" :key="i">
        <v-chip
          class="filter__chip"
          color="primary"
          :outline="status !== filter"
          @click="status = filter"
        >
          {{ filter.toUpperCase() }}
        </v-chip>
      </li>
    </ul>
    <v-subheader>My orders</v-subheader>
    <v-expansion-panel focusable>
      <v-expansion-panel-content v-for="order in $store.getters.orders(status)" :key="order.id">
        <template v-slot:header>
          <h4>Order #{{ order.id }} - {{ order.total_amount }} euros</h4>
        </template>
        <v-card>
          <v-card-text>
            <v-list two-line>
              <!-- Shipment cost -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ order.shipment_amount }} euros</v-list-tile-title>
                  <v-list-tile-sub-title>Shipment cost</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Weight -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ order.total_weight }} kg</v-list-tile-title>
                  <v-list-tile-sub-title>Weight</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Price -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ order.total_amount }} euros</v-list-tile-title>
                  <v-list-tile-sub-title>Total</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Order date -->
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ new Date(order.createdAt) }}</v-list-tile-title>
                  <v-list-tile-sub-title>Order date</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" :to="`/orders/${order.id}`">View order</v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data: () => ({
    filters: ['all', 'pending', 'paid', 'cancelled'],
    status: 'all',
  }),
  async created() {
    await this.$store.dispatch('fetchOrders');
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  list-style: none;
  margin-bottom: 24px;
}

.filter__chip:hover {
  cursor: pointer;
}
</style>
