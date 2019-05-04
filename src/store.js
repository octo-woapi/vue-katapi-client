import ky from 'ky';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import {
  SET_PRODUCTS, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CREATE_ORDER,
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
  };
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: initState(),
  actions: {
    async fetchProducts({ commit }) {
      const products = await productService.listProducts();
      commit(SET_PRODUCTS, products);
    },
    async order({ commit, state }) {
      const location = await orderService.createOrder(state.cart);
      commit(CLEAR_CART);
      return location;
    },
    async pay({ commit }, orderId) {
      // const order = await orderService.update()
    },
    async fetchOrder(_, id) {
      return orderService.getOrder(id);
    },
  },
  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
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
