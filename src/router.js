import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(({ meta }) => meta.requiresAuth)
  if (to.meta.requiresAuth) {
    if (requiresAuth) {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) next({ name: 'Signin', query: { redirect: to.fullPath } })
        else next()
      })
    } else next()
  } else next()
})

export default router
