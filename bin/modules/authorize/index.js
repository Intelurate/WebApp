'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Auth = undefined;

var _jwtAsync = require('../jwt-async');

var _mongoist = require('mongoist');

var _mongoist2 = _interopRequireDefault(_mongoist);

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Auth(app, method, route, permissions) {

    return app[method](route, async function (req, res, next) {

        var jwtAsync = _jwtAsync.JWTAsync.init('e8vh745v9o875w9v');

        var decoded = void 0;
        try {
            decoded = await jwtAsync.verify(req.cookies["UserToken"]);
        } catch (e) {
            decoded = undefined;
        }

        if (decoded) {

            var user = await _database2.default.users.findOne({ _id: _mongoist2.default.ObjectId(decoded.userId) }, { permissions: 1, email: 1, firstName: 1, lastName: 1 });

            if (!user) {
                return res.redirect('/login');
            }

            res.locals.user = user;

            if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE") {

                if (req.body.ForgeryToken && req.body.ForgeryToken === decoded.ForgeryToken) {

                    var access = hasPermissions(user.permissions, permissions);
                    if (access) {
                        return next();
                    } else {
                        return res.status(403).send({ message: 'No Permission' });
                    }
                } else {
                    return res.status(403).send({ message: 'No Security Token' });
                }
            } else {

                if (permissions) {
                    var _access = hasPermissions(user.permissions, permissions);
                    if (_access) {
                        return next();
                    } else {
                        return res.status(403).send({ message: 'No Permission' });
                    }
                } else {
                    return next();
                }
            }
        } else {
            return res.redirect('/login');

            //return res.status(403).send({ message: 'No Permission' });
        }
    });
};

function hasPermissions(userPermissions, permissions) {
    if (permissions) {
        return _lodash2.default.isMatch(userPermissions, permissions);
    } else {
        return true;
    }
}

exports.Auth = Auth;