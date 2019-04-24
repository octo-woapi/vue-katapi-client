<template>
  <div class="product">
    <h4>{{ name }}</h4>
    <p class="product__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    name: String,
    description: String,
  },
};
</script>
