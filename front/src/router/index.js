import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import MainNav from '@/components/MainNav'
import NewPost from '@/components/posts/new'
import all from '@/components/posts/all'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        'default': index,
        'MainNav': MainNav
      }
    },
    {
      path: '/community/new',
      name: 'new_community_path',
      components: {
        'default': NewPost,
        'MainNav': MainNav
      }
    },
    {
      path: '/community',
      name: 'community_path',
      components: {
        'default': all,
        'MainNav': MainNav
      }
    },
    {
      path: '/login',
      name: 'login_path',
      components: {
        'default': login,
        'MainNav': MainNav
      }
    }
  ]
})
