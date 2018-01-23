import Vue from 'vue'
import App from './App.vue'


import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {ROUTES} from './routes';
// import './directives/Transform.js';
import VeeValidate, { Validator } from 'vee-validate';
import pt from 'vee-validate/dist/locale/pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/css/dashboard.css';

Vue.use(VueResource); //habilitando o resource para usar $http e $resource
Vue.http.options.root="http://localhost:8100";
Vue.http.interceptors.push((req, next) => {

  // é possível colocar informações no header antes do envio da requisição
  req.headers.set('Content-type', 'application/json');

  next(res => {
  });

});
Vue.use(VueRouter); //habilitando a rota

const router = new VueRouter({
  routes:ROUTES,
  mode:'history' // remove o # do endereço
});

Validator.localize('pt_BR', pt);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
