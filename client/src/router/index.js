import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Home from './views/Home';
import Noncustomer from './views/Noncustomer';
import Login from './views/Login';
import Admin from './views/Admin';

Vue.use(VueRouter)

import './SCSS/main.SCSS';

Vue.config.productionTip = false; 

Vue.component('CreateAccount', CreateAccount);
Vue.component('Noncustomer', Noncustomer);
Vue.component('Login', Login);
Vue.component('Customer', Customer);
Vue.component('home', Home);
Vue.component('Admin', Admin);

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
   
      {
        path:'/Noncustomer',component:Noncustomer},
     {path:'/Login',component:Login},
     {path:'/admin',component:Admin},
       
     {path:'/create-account',component:CreateAccount},
   ]
 })
 Vue.use(vuetify);

new Vue({
router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

