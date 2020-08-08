import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Search from '@/components/Search'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search
    },
    {
        path: '/Result',
        name: 'Result',
        component: Result
    }
  ]
})