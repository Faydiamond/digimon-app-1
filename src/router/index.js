import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/digimones',
    name: 'Digimones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Digimones.vue')
  },
  {
    path: '/searchDigimon',
    name: 'search-digimon',
    component: () => import(/* webpackChunkName: "about" */ '../views/searchDigimon.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
