import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import './plugins/vuetify-assets'

import App from './App.vue'
import { routes } from './routes'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
