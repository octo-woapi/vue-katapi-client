<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ name }}</div>
        <span class="grey--text">{{ price }} euros</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="primary" @click="$emit('add')">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: [String, Number],
    name: String,
    price: Number,
    weight: Number,
  },
};
</script>
