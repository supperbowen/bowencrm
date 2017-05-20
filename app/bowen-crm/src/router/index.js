import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Desktop from '@/components/Desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Desktop
    }
  ]
})
