import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/config/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  if ((to.meta.requiresAuth || to.meta.guestOnly) && !store.state.auth.user) {
    await store.dispatch('auth/check')
  }

  const { loggedIn } = store.state.auth
  const requiresAuth = to.matched.some(({ meta }) => meta.requiresAuth)
  const guestOnly = to.matched.some(({ meta }) => meta.guestOnly)

  if (guestOnly && loggedIn) next({ name: 'Dashboard' })
  else if (requiresAuth && !loggedIn) next({ name: 'Signin', query: { redirect: to.fullPath } })
  else next()
})

export default router
