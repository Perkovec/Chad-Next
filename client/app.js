import Vue from 'vue'
import AtUI from 'at-ui'
import 'at-ui-style'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

sync(store, router)

Vue.use(AtUI)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
