'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = class extends koahub.controller {

    async _initialize() {
        console.log('base _initialize');
    }

    async isLogin() {
        console.log('base isLogin');
    }
};