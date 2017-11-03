import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Result from '@/components/Result'
import Hot from '@/components/Hot'
import hhh from '@/components/hhh'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/hhh',
      name: 'hhh',
      component: hhh
    }
  ]
})
