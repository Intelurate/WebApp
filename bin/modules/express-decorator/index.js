'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpressApi = exports.Route = exports.Delete = exports.Put = exports.Get = exports.Post = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _authorize = require('../authorize/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Route(method, route, auth, permissions) {
    return function (target, prop, descriptor) {
        var fn = descriptor.value;

        descriptor.enumerable = true;
        descriptor.value = function (app) {

            if (auth) {
                (0, _authorize.Auth)(app, method, route, permissions);
            }
            app[method](route, function (req, res) {
                fn.call(target, req, res);
            });

            return { className: target.constructor.name, prop: prop, method: method, route: route };
        };
    };
}

function Get(route, auth, permissions) {
    return Route('get', route, auth, permissions);
}
function Post(route, auth, permissions) {
    return Route('post', route, auth, permissions);
}
function Put(route, auth, permissions) {
    return Route('put', route, auth, permissions);
}
function Delete(route, auth, permissions) {
    return Route('delete', route, auth, permissions);
}

var ExpressApi = function () {
    function ExpressApi() {
        _classCallCheck(this, ExpressApi);
    }

    _createClass(ExpressApi, null, [{
        key: 'run',
        value: function run(app, controllers, unitTest) {

            var UnitTest = {};
            controllers = controllers.forEach(function (Controller, i) {

                var d = Object.create(Controller.prototype);

                var Descriptors = Object.getOwnPropertyDescriptors(Controller.prototype);

                var Keys = _underscore2.default.keys(Descriptors);
                Keys.forEach(function (v, i) {

                    if (Descriptors[v].enumerable === true) {

                        var forTesting = d[v].call(Controller, app);

                        if (unitTest) {

                            Controller[forTesting.prop] = {};
                            Controller[forTesting.prop].request = function (params) {

                                forTesting.route = forTesting.route.split("/").map(function (v, i) {
                                    if (v.indexOf(":") !== -1) {
                                        var param = v.split(":")[1];
                                        var optional = false;
                                        if (param.indexOf("?") !== -1) {
                                            optional = true;
                                            param = param.replace("?", "");
                                        }
                                        if (params) {
                                            v = params[param];
                                        } else {
                                            if (optional === false) {
                                                throw "Non Optiona Param is Needed";
                                            } else {
                                                v = "";
                                            }
                                        }
                                    }

                                    if (v !== "") {
                                        return '/' + v;
                                    } else {
                                        return "";
                                    }
                                }).join('');

                                return (0, _supertest2.default)(app)[forTesting.method](forTesting.route);
                            };
                        }
                    }
                });

                return Controller;
            });
        }
    }]);

    return ExpressApi;
}();

exports.Post = Post;
exports.Get = Get;
exports.Put = Put;
exports.Delete = Delete;
exports.Route = Route;
exports.ExpressApi = ExpressApi;