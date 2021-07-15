import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Home from './views/Home';
import Noncustomer from './views/Noncustomer';
import Login from './views/Login';
import Customer from './views/Customer';

Vue.use(VueRouter)

import './SCSS/main.SCSS';

Vue.config.productionTip = false 

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Home},
      {path:'/Noncustomer',component:Noncustomer},
     {path:'/Login',component:Login},
       {path:'/Customer',component:Customer},
   ]
 })

new Vue({
router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
