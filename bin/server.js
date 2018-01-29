'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('./app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AppMod from 'app-module-path'; 
// AppMod.addPath('./modules');
var server = _http2.default.createServer(_app.app);
var port = 7272;
server.listen(port, function () {
    console.log('Gulp is running the app on port ' + port + ' (localhost:' + port + ')');
});