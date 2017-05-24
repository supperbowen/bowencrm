'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _base = require('../_base/base.controller');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class user extends _base2.default {
    async index2() {
        this.json({ a: 100 }, 2, 200);
    }

    async list() {}
}
exports.default = user;