
const project = r => require.ensure([], () => r(require('../page/project/project.vue')), 'project')
const router = {
	path:'/project',
	component:project
};
export default {router};