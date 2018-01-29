'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PurchaseOrderApi = exports.ShopApi = exports.UsersApi = exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./api/users');

var _shop = require('./api/shop');

var _purchaseOrder = require('./api/purchase-order');

var _bootstrap = require('./api/bootstrap');

var _expressDecorator = require('./modules/express-decorator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { setTimeout } from 'timers';

// import AppMod from 'app-module-path'; 
// AppMod.addPath('./modules');

var app = (0, _express2.default)();
app.use((0, _cookieParser2.default)());
app.use((0, _morgan2.default)('dev')); // Create and display a HTTP logger middleware function
app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '50mb'
}));

['/lib/bootstrap/css/bootstrap.min.css', '/lib/bootstrap/css/bootstrap.css', '/lib/font-awesome/css/font-awesome.min.css', '/lib/font-awesome/css/font-awesome.css', '/lib/animate.css', '/lib/selectric/selectric.css', '/lib/swiper/css/swiper.min.css', '/lib/aos/aos.css', '/lib/Magnific-Popup/magnific-popup.css'].forEach(function (v, i) {
    app.get(v, function (req, res) {
        res.setHeader('Content-Type', 'text/css');
        var stream = _fs2.default.createReadStream('./listo/' + v);
        stream.pipe(res);
    });
});

_expressDecorator.ExpressApi.run(app, [_users.UsersApi, _shop.ShopApi, _purchaseOrder.PurchaseOrderApi, _bootstrap.BootstrapApi], true);

exports.app = app;
exports.UsersApi = _users.UsersApi;
exports.ShopApi = _shop.ShopApi;
exports.PurchaseOrderApi = _purchaseOrder.PurchaseOrderApi;