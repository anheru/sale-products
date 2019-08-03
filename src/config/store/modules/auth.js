import firebase from 'firebase/app'

const state = {
  user: null,
  loggedIn: false
}

const mutations = {
  SET_USER (state, payload = null) {
    state.loggedIn = Boolean(payload)

    if (state.loggedIn) {
      state.user = {
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL,
        emailVerified: payload.emailVerified,
        uid: payload.uid
      }
    }
  }
}

const actions = {
  check ({ commit }) {
    return new Promise((resolve) => {
      firebase
        .auth()
        .onAuthStateChanged((user) => {
          if (user) commit('SET_USER', user)
          resolve()
        })
    })
  },

  signin ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(({ user }) => {
          commit('SET_USER', user)
          resolve()
        })
        .catch((e) => {
          commit('SET_USER')
          reject(e)
        })
    })
  },

  signout ({ commit }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('SET_USER')
          resolve()
        })
        .catch((e) => {
          reject(e)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
