import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import RegisterComplaint from '../views/RegisterComplaint';
import CreateAccount from '../views/CreateAccount';

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/register-complaint',
    name: 'register-complaint',
    component: RegisterComplaint,
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: CreateAccount,
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
