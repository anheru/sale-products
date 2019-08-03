const state = {
  all: [],
  loading: false
}

const mutations = {
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  SET_ITEMS (state, payload) {
    state.all = payload
  }
}

const getters = {
  getItemBySlug: (state) => (slug) => {
    return state.all.find(i => i.slug === slug)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
