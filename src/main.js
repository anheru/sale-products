import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

import './registerServiceWorker'
import '@/assets/css/app.css'

Vue.config.productionTip = false

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'sale-products.firebaseapp.com',
  databaseURL: 'https://sale-products.firebaseio.com',
  projectId: 'sale-products',
  storageBucket: 'sale-products.appspot.com',
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID
}

firebase.initializeApp(config).auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
