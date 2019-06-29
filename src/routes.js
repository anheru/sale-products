const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
  },
  {
    path: '/p/:slug',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ './views/Signin.vue')
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
    component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ './views/NotFound.vue')
  },
  {
    path: '*',
    redirect: { name: 'NotFound' }
  }
]

export default routes
