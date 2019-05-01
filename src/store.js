import Vue from 'vue';
import Vuex from 'vuex';

import {
  ADD_PRODUCT, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART,
} from '@/mutation-types';
import { ProductService } from '@/services/product-service';

// Register Vuex
Vue.use(Vuex);

const productService = new ProductService();

export function initState() {
  return {
    cart: [],
    products: [],
  };
}

export default new Vuex.Store({
  state: initState(),
  actions: {
    async fetchProducts({ commit }) {
      const products = await productService.listProducts();
      products.forEach((product) => {
        commit(ADD_PRODUCT, product);
      });
    },
  },
  mutations: {
    [ADD_PRODUCT](state, product) {
      state.products.push(product);
    },
    [ADD_TO_CART](state, product) {
      state.cart.push(product);
    },
    [CLEAR_CART](state) {
      // eslint-disable-next-line no-param-reassign
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
