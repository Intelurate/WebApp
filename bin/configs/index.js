'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeObj = function NativeObj(name) {
	var nativeObject = _yamljs2.default.load(__dirname + '/' + name + '.yml');
	return nativeObject;
};

exports.default = NativeObj;