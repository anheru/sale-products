import firebase from 'firebase/app'

function colItems () {
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
  },

  getItemById: (state) => (id) => {
    return state.all.find(i => i.id === id)
  }
}

const actions = {
  updateItem ({ dispatch, commit }, item) {
    return new Promise((resolve, reject) => {
      colItems().doc(item.id || colItems().doc().id).set({
        createdAt: new Date().toTimeString(),
        ...item
      })
        .then(() => {
          dispatch('loadItems')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  deleteItem ({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      colItems().doc(id).delete()
        .then(() => {
          dispatch('loadItems')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  loadItems ({ commit }) {
    commit('SET_LOADING', true)

    colItems().get()
      .then((snapshot) => {
        let items = []
        snapshot.forEach(doc => {
          items = items.concat({
            ...doc.data(),
            id: doc.id
          })
        })
        commit('SET_ITEMS', items)
      })
      .finally(() => {
        commit('SET_LOADING', false)
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
