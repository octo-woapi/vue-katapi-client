import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: 'checkout' */ '@/views/Checkout'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: 'orders' */ '@/views/Orders.vue'),
    },
    {
      path: '/orders/:id',
      name: 'order',
      component: () => import(/* webpackChunkName: 'orders' */ '@/views/ViewOrder.vue'),
    },
  ],
});
