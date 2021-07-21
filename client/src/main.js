import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Home from './views/Home';
import Noncustomer from './views/Noncustomer';
import Login from './views/Login';
import Customer from './views/Customer';
import Admin from './views/Admin';
import CreateAccount from './views/CreateAccount';

Vue.use(VueRouter)

import './SCSS/main.SCSS';

Vue.config.productionTip = false 

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Home},
    {path:'/CreateAcccount',component:CreateAccount},
      {path:'/Noncustomer',component:Noncustomer},
     {path:'/Login',component:Login},
       {path:'/Customer',component:Customer},
       {path:'/Admin',component:Admin},
       
       {path:'/create-account',component:CreateAccount},

       
   ]
 })

new Vue({
router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
