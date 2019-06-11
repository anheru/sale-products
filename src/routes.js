import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/p/:slug',
    name: 'Product',
    component: () => import('./views/Product.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('./views/Signin.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
      breadcrumb: [
        { name: 'Dashboard' }
      ]
    },
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/NotFound.vue')
  },
  {
    path: '*',
    redirect: { name: 'NotFound' }
  }
]

export default routes
