import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import RegisterComplaint from '../views/RegisterComplaint';
//import CreateAccount from '../views/CreateAccount';
//import Admin from '../views/Admin';
Vue.use(VueRouter)

const routes = [
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
