import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
const project = r => require.ensure([], () => r(require('@/pages/project/project.vue')), 'project');
export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/project',
			component: project
		}
	
	]
})
