import firebase from 'firebase/app'

function docRef () {
  return firebase.firestore().collection('items')
}

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
  },
  ADD_ITEM (state, payload) {
    state.all = state.all.concat(payload)
  }
}

const getters = {
  getItemBySlug: (state) => (slug) => {
    return state.all.find(i => i.slug === slug)
  }
}

const actions = {
  loadItems ({ commit }) {
    docRef().get()
      .then((snapshot) => {
        let items = []
        snapshot.forEach(doc => {
          items = items.concat({
            id: doc.id,
            ...doc.data()
          })
        })
        commit('SET_ITEMS', items)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
