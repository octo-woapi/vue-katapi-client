import ky from 'ky';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import {
  SET_PRODUCTS,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_ORDER, SET_ORDERS,
} from '@/mutation-types';
import { ProductService } from '@/services/product-service';
import { OrderService } from '@/services/order-service';

// Register Vuex
Vue.use(Vuex);

const http = ky.extend({ prefixUrl: 'http://localhost:3000' });
const productService = new ProductService(http);
const orderService = new OrderService(http);

export function initState() {
  return {
    cart: [],
    products: [],
    orders: [],
    order: null,
  };
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: initState(),
  getters: {
    orders: state => status => (status === 'all' ? state.orders : state.orders.filter(order => order.status === status)),
  },
  actions: {
    async fetchProducts({ commit }, sort) {
      const searchParams = {};
      if (sort != null) searchParams.sort = sort;
      const products = await productService.listProducts(searchParams);
      commit(SET_PRODUCTS, products);
    },
    async order({ commit, state }) {
      const location = await orderService.createOrder(state.cart);
      commit(CLEAR_CART);
      return location;
    },
    async cancel({ commit }, order) {
      await orderService.cancelOrder(order);
      commit(SET_ORDER, {
        ...order,
        status: 'cancelled',
      });
    },
    async pay({ commit }, order) {
      await orderService.payOrder(order);
      commit(SET_ORDER, {
        ...order,
        status: 'paid',
      });
    },
    async fetchOrders({ commit }) {
      const orders = await orderService.listOrders();
      commit(SET_ORDERS, orders);
    },
    async fetchOrder({ commit }, id) {
      const order = await orderService.getOrder(id);
      commit(SET_ORDER, order);
    },
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    },
    [SET_ORDERS](state, orders) {
      state.orders = orders;
    },
    [SET_ORDER](state, order) {
      state.order = order;
    },
    [ADD_TO_CART](state, product) {
      state.cart.push(product);
    },
    [CLEAR_CART](state) {
      state.cart = [];
    },
    [REMOVE_FROM_CART](state, product) {
      const i = state.cart.findIndex(p => product.id === p.id);
      if (i !== -1) {
        state.cart.splice(i, 1);
      }
    },
  },
});
