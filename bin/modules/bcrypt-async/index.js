'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BcryptAsync = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BcryptAsync = function () {
    function BcryptAsync() {
        _classCallCheck(this, BcryptAsync);
    }

    _createClass(BcryptAsync, [{
        key: 'compare',
        value: async function compare(value, encryptedValue) {

            return new Promise(function (resolve, reject) {
                _bcrypt2.default.compare(value, encryptedValue).then(function (bool) {
                    resolve(bool);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'genSalt',
        value: async function genSalt(number) {
            return new Promise(function (resolve, reject) {
                _bcrypt2.default.genSalt(5).then(function (salt) {
                    resolve(salt);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'hash',
        value: async function hash(value, salt) {
            return new Promise(function (resolve, reject) {
                _bcrypt2.default.hash(value, salt).then(function (hash) {
                    resolve(hash);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }], [{
        key: 'init',
        value: function init() {
            return new BcryptAsync();
        }
    }]);

    return BcryptAsync;
}();

exports.BcryptAsync = BcryptAsync;