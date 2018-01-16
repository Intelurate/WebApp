'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

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

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _testApi = require('./controllers/api/testApi');

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('app-module-path').addPath('./modules');

var app = (0, _express2.default)();
app.use((0, _cookieParser2.default)());
app.use((0, _morgan2.default)('dev')); // Create and display a HTTP logger middleware function
app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ // to support URL-encoded bodies
    extended: true,
    limit: '50mb'
}));

var server = _http2.default.createServer(app);
var port = 7272;
server.listen(port, function () {
    console.log('Gulp is running the app on port ' + port + ' (localhost:' + port + ')');
});

//require('express-controller').run(require('./controllers/api/index.js'), app);


// require('express-controller').run([
//     require('./controllers/api/users'),
//     require('./controllers/api/purchaseOrder')    
// ], app)


[_testApi.TestApiController].forEach(function (controller, i) {
    var d = new controller();
    var routesToCall = Object.getOwnPropertyNames(controller.prototype);
    routesToCall.forEach(function (v, i) {
        if (v.indexOf('get') !== -1 || v.indexOf('post') !== -1 || v.indexOf('put') !== -1 || v.indexOf('delete') !== -1) {
            d[v](app);
        }
    });
});

//require('./controllers/bootstrap.js').set(app);

exports.app = app;
