import {BaseLogic} from '/src/common/logic';
import {hooks} from '/src/common/utils';

export default class projectDataLogic extends BaseLogic {
	constructor() {
		super({
			uri: 'portfolio/info',
			listUri: 'portfolio/list',
			enablePaging: true,
			enableSearch: true,
			pageSize: 10
		});
		
		this.projectInfo = {};
	}
	
	async upgradPortfolio(id, type) {
		return await this.httpPut(`portfolio/upgradePortfolio`, {id, type});
	}
	
	async assign(projects) {
		return await this.httpPos(`project/assign`, projects);
	}
	
	async getProjectUsers(projectId) {
		return await this.httpGet('project/getProjectUsers', {id: projectId});
	}
	
	async loginOpera(projectId) {
		return await this.httpPost('user/loginOpera', {projectId});
	}
	
	getRoleSuffix(roleCode) {
		roleCode = roleCode || '';
		return roleCode.split('-')[0];
	}
}