import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/pageList'
  },
  {
    path: '/pageList',
    name: 'pageList',
    component: () => import(/* webpackChunkName: "about" */ '../views/pageList.vue'),
    children:[
      {
        path: '/',
        name: 'auto',
        redirect: '/pageList/parent'
      },
      {
        path: '/pageList/parent',
        name: 'parent',
        component: ()=> import('../components/parent.vue')
      },
      {
        path: '/pageList/testI18n',
        name: 'testI18n',
        component: ()=> import('../components/testI18n.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/test.vue')
  },
  {
    path: '/testI18n',
    name: 'testI18n',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/testI18n.vue')
  },
  {
    path: '/parent',
    name: 'parent',    
    component: () => import(/* webpackChunkName: "about" */ '../components/parent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
