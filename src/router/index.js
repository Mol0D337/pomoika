import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.use(VueRouter, Vuelidate, axios)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
