'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsersApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class;

var _database = require('../modules/database');

var _database2 = _interopRequireDefault(_database);

var _expressDecorator = require('../modules/express-decorator');

var _bcryptAsync = require('../modules/bcrypt-async');

var _jwtAsync = require('../modules/jwt-async');

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

var UsersApi = (_dec = (0, _expressDecorator.Post)("/test-api-post"), _dec2 = (0, _expressDecorator.Get)("/test-api-get"), _dec3 = (0, _expressDecorator.Get)("/logout"), _dec4 = (0, _expressDecorator.Post)("/api/login"), (_class = function () {
    function UsersApi() {
        _classCallCheck(this, UsersApi);
    }

    _createClass(UsersApi, [{
        key: 'TestApiPost',
        value: function TestApiPost(req, res) {
            if (req.body.password && req.body.email) {
                return res.send({ name: "eddie" });
            }
            return res.sendStatus(403);
        }
    }, {
        key: 'TestApiGet',
        value: function TestApiGet(req, res) {
            return res.send({ name: "eddie" });
        }
    }, {
        key: 'Logout',
        value: function Logout(req, res) {
            res.clearCookie('UserToken');
            res.redirect("/login");
        }
    }, {
        key: 'Login',
        value: async function Login(req, res) {

            if (!req.body.password || !req.body.email) {
                return res.sendStatus(403);
            }

            var user = await _database2.default.users.findOne({ email: req.body.email }, { password: 1 });

            if (!user) {
                return res.send(false);
            }

            var bcrypt = _bcryptAsync.BcryptAsync.init();
            var password = await bcrypt.compare(req.body.password, user.password);

            if (password === true) {

                var jwtAsync = _jwtAsync.JWTAsync.init('e8vh745v9o875w9v');
                var token = await jwtAsync.sign({ userId: user._id.toString() });

                res.cookie("UserToken", token);

                return res.send(true);
            } else {
                return res.send(false);
            }
        }
    }]);

    return UsersApi;
}(), (_applyDecoratedDescriptor(_class.prototype, 'TestApiPost', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'TestApiPost'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'TestApiGet', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'TestApiGet'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'Logout', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'Logout'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'Login', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'Login'), _class.prototype)), _class));
exports.UsersApi = UsersApi;