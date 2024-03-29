import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './config/store'
import firebaseConfig from './config/firebase'
import { sync } from 'vuex-router-sync'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import './registerServiceWorker'
import './config/filters'
import '@/assets/css/app.css'
import Validator from 'validatorjs'

Validator.useLang('es')
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
