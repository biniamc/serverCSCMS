import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterComplaint from '../views/RegisterComplaint';
import EmployeeLogin from '../views/EmployeeLogin';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register-complaint',
    name: 'register-complaint',
    component: RegisterComplaint,
  },
  {
    path: '/employee-login',
    name: 'EmployeeLogin',
    component: EmployeeLogin,
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
