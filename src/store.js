import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    loading: false,
    user: null
  },
  getters: {
    getItemBySlug: (state) => (slug) => {
      return state.items.find(i => i.slug === slug)
    }
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  }
})
