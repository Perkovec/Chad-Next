import Vue from 'vue'
import Router from 'vue-router'
import WritePost from '../views/WritePost'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: WritePost
    }
  ]
})
