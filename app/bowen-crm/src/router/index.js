import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '@/modules/desktop/Desktop'
import About from '@/modules/home/About'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'crm',
      component: Desktop,
      children: [
        {
          path: '/hello',
          name: 'crm.hello',
          component: Hello
        },
        {
          path: '/about',
          name: 'crm.About',
          component: About
        }
      ]
    }
  ]
})
