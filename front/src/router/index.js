import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import MainNav from '@/components/MainNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        'default': index,
        'MainNav': MainNav
      }
    }
  ]
})
