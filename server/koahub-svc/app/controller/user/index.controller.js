import base from '../_base/base.controller'

export default class user extends base {
    async index2() {
        this.json({ a: 100 }, 2, 200);
    }
    
    async list(){
    
    }
}