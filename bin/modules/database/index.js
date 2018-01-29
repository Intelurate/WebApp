'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoist = require('mongoist');

var _mongoist2 = _interopRequireDefault(_mongoist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _mongoist2.default)('mongodb://localhost:27017/EventCalendar', {});
exports.default = db;