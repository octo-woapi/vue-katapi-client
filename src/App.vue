<template>
  <v-app>
    <v-content>
      <Navbar />
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
