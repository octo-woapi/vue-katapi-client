<template>
  <div>
    <product name="Robe" description="Une tres belle robe" />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue';

export default {
  name: 'home',
  components: {
    Product,
  },
};
</script>
