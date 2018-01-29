'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JWTAsync = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jwtAsync = require('jwt-async');

var _jwtAsync2 = _interopRequireDefault(_jwtAsync);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// jwt.signAsync()
// .then(function (signed) {
// return jwt.verifyAsync(signed);
// })
// .then(function (claims) {
// console.log(claims);
// })
// .catch(JWT.JWTError, function (e) {
// console.log(e);
// });


var JWTAsync = function () {
    function JWTAsync(secret) {
        _classCallCheck(this, JWTAsync);

        this.jwt = _bluebird2.default.promisifyAll(new _jwtAsync2.default());
        this.jwt.setSecret(secret);
    }

    _createClass(JWTAsync, [{
        key: 'sign',
        value: async function sign(data) {
            var _this = this;

            return new _bluebird2.default(function (resolve, reject) {
                _this.jwt.signAsync(data).then(function (signed) {
                    resolve(signed);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }
    }, {
        key: 'verify',
        value: async function verify(encoded) {
            var _this2 = this;

            return new _bluebird2.default(function (resolve, reject) {
                _this2.jwt.verifyAsync(encoded).then(function (decoded) {
                    resolve(decoded.claims);
                }).catch(function (e) {
                    reject(e);
                });
            });
        }
    }], [{
        key: 'init',
        value: function init(secret) {
            return new JWTAsync(secret);
        }
    }]);

    return JWTAsync;
}();

exports.JWTAsync = JWTAsync;