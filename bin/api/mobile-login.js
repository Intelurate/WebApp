'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class;

//var  setTimeout = require('timers');

var _database = require('../modules/database');

var _database2 = _interopRequireDefault(_database);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _expressDecorator = require('../modules/express-decorator');

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

var _randomNumberInRange = require('random-number-in-range');

var _randomNumberInRange2 = _interopRequireDefault(_randomNumberInRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var accountSid = 'AC9fa9839e7a6243a3e969ae9cfd46fca2';
var authToken = '8b1f5fbf7542181ceebdc92d5f13065a';
var client = new _twilio2.default(accountSid, authToken);

var LoginApi = (_dec = (0, _expressDecorator.Get)('/api/users/push-token'), _dec2 = (0, _expressDecorator.Get)('/api/token/test'), _dec3 = (0, _expressDecorator.Post)('/api/send_passcode'), _dec4 = (0, _expressDecorator.Get)('/api/test_passcode'), (_class = function () {
    function LoginApi() {
        _classCallCheck(this, LoginApi);
    }

    _createClass(LoginApi, [{
        key: 'getPushTokenApi',
        value: function getPushTokenApi(req, res) {
            console.log(req.body);
            res.send(true);
        }
    }, {
        key: 'getPushTokenTestApi',
        value: function getPushTokenTestApi(req, res) {

            res.send({ name: 'sssss' });
        }
    }, {
        key: 'sendPassCode',
        value: function sendPassCode(req, res) {

            var num = (0, _randomNumberInRange2.default)(1000, 9999).toString();

            console.log('req.body.phoneNumber', req.body);

            _database2.default.systemUsers.findOne({ phoneNumber: req.body.phoneNumber }, function (err, user) {
                _bcrypt2.default.genSalt(5, function (err, salt) {
                    _bcrypt2.default.hash(num.toString(), salt, function (err, hash) {

                        _jsonwebtoken2.default.sign({
                            token: hash
                        }, 'secret', { expiresIn: 20 }, function (err, encoded) {

                            _database2.default.systemUsers.update({ phoneNumber: req.body.phoneNumber }, { $set: { passCode: encoded } }, function (err, user) {
                                client.messages.create({
                                    body: num,
                                    to: '+1' + req.body.phoneNumber,
                                    from: '+15616178113'
                                }).then(function (message) {
                                    res.send({ 'num': num });
                                }).catch(function (err) {
                                    return console.log(err);
                                });
                            });
                        });
                    });
                });
            });
        }
    }, {
        key: 'testPassCode',
        value: function testPassCode(req, res) {

            console.log('req.body', req.body);

            _database2.default.systemUsers.findOne({ phoneNumber: req.body.phoneNumber }, function (err, user) {

                console.log('req.body.passCode', req.body.passCode.toString());
                console.log('user.passCode', user.passCode);

                _jsonwebtoken2.default.verify(user.passCode, 'secret', function (err, decoded) {

                    if (err) {
                        console.log(err);
                        res.send(false);
                    } else {

                        _bcrypt2.default.compare(req.body.passCode.toString(), decoded.token, function (err, bool) {

                            console.log('Bool', bool);

                            res.send(bool);
                        });
                    }
                });
            });
        }
    }]);

    return LoginApi;
}(), (_applyDecoratedDescriptor(_class.prototype, 'getPushTokenApi', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'getPushTokenApi'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getPushTokenTestApi', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'getPushTokenTestApi'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sendPassCode', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'sendPassCode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'testPassCode', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'testPassCode'), _class.prototype)), _class));
exports.LoginApi = LoginApi;