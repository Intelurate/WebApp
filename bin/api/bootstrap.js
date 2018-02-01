'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BootstrapApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _desc, _value, _class;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _mongoist = require('mongoist');

var _mongoist2 = _interopRequireDefault(_mongoist);

var _database = require('../modules/database');

var _database2 = _interopRequireDefault(_database);

var _jwtAsync = require('../modules/jwt-async');

var _expressDecorator = require('../modules/express-decorator');

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

var BootstrapApi = (_dec = (0, _expressDecorator.Get)('/css/style.css'), _dec2 = (0, _expressDecorator.Get)('/fonts/:file'), _dec3 = (0, _expressDecorator.Get)('/assets/global/plugins/font-awesome/css/:file'), _dec4 = (0, _expressDecorator.Get)('/css/:file'), _dec5 = (0, _expressDecorator.Get)('/assets/global/plugins/bootstrap/css/:file'), _dec6 = (0, _expressDecorator.Get)('/assets/global/plugins/bootstrap-switch/css/:file'), _dec7 = (0, _expressDecorator.Get)('/assets/pages/css/:file'), _dec8 = (0, _expressDecorator.Get)('/assets/global/css/:file'), _dec9 = (0, _expressDecorator.Get)('/assets/layouts/layout/css/:file'), _dec10 = (0, _expressDecorator.Get)('/assets/layouts/layout/css/themes/:file'), _dec11 = (0, _expressDecorator.Get)('/assets/pages/css/:file'), _dec12 = (0, _expressDecorator.Get)('/css/:path/:file'), _dec13 = (0, _expressDecorator.Get)('/scripts/:bundle'), _dec14 = (0, _expressDecorator.Get)('/electron'), _dec15 = (0, _expressDecorator.Get)('/img/store/:file'), _dec16 = (0, _expressDecorator.Get)('/img/demo/:file'), _dec17 = (0, _expressDecorator.Get)('/img/demo/icons/:file'), _dec18 = (0, _expressDecorator.Get)('/img/demo/property/:file'), _dec19 = (0, _expressDecorator.Get)('/images/:file'), _dec20 = (0, _expressDecorator.Get)('/login'), _dec21 = (0, _expressDecorator.Get)('/api/getForgeryToken'), _dec22 = (0, _expressDecorator.Get)('/*'), (_class = function () {
	function BootstrapApi() {
		_classCallCheck(this, BootstrapApi);
	}

	// @Get('/assets/global/plugins/font-awesome/fonts/:file')
	// cssGlobal(req, res) {
	// 	var file = req.params.file;
	// 	res.setHeader('Content-Type', 'text/css');
	// 	var stream = fs.createReadStream('./html/assets/global/plugins/font-awesome/fonts/' + file);
	// 	stream.pipe(res);
	// }


	_createClass(BootstrapApi, [{
		key: 'cssStyle',
		value: function cssStyle(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./listo/css/style.css');
			stream.pipe(res);
		}
	}, {
		key: 'fontFile',
		value: function fontFile(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./listo/lib/font-awesome/fonts/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'fontAwesome',
		value: function fontAwesome(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/global/plugins/font-awesome/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssFile',
		value: function cssFile(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'bootStrapPlugins',
		value: function bootStrapPlugins(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/global/plugins/bootstrap/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'bootstrapSwitch',
		value: function bootstrapSwitch(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/global/plugins/bootstrap-switch/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssAssets',
		value: function cssAssets(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/pages/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'globalCss',
		value: function globalCss(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/global/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssLayouts',
		value: function cssLayouts(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/layouts/layout/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssThemes',
		value: function cssThemes(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/layouts/layout/css/themes/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssPages',
		value: function cssPages(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/assets/pages/css/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'cssFiles',
		value: function cssFiles(req, res) {
			var file = req.params.file;
			var path = req.params.path;
			res.setHeader('Content-Type', 'text/css');
			var stream = _fs2.default.createReadStream('./html/css/' + path + '/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'bundles',
		value: function bundles(req, res) {
			var bundle = req.params.bundle;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./html/scripts/' + bundle);
			stream.pipe(res);
		}
	}, {
		key: 'electronApp',
		value: function electronApp(req, res) {
			var bundle = req.params.bundle;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./html/assets/reactApp.js');
			stream.pipe(res);
		}
	}, {
		key: 'storeFile',
		value: function storeFile(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./listo/img/store/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'demoFiles',
		value: function demoFiles(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./listo/img/demo/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'demoIcons',
		value: function demoIcons(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./listo/img/demo/icons/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'proppertyFiles',
		value: function proppertyFiles(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./listo/img/demo/property/' + file);
			stream.pipe(res);
		}
	}, {
		key: 'getImages',
		value: function getImages(req, res) {
			var file = req.params.file;
			res.setHeader('Content-Type', '');
			var stream = _fs2.default.createReadStream('./images/' + file);
			stream.pipe(res);
		}

		// @Get('/images/test_products/:file')
		// testProducts (req, res) {
		// 	var file = req.params.file;
		// 	res.setHeader('Content-Type', '');
		// 	var stream = fs.createReadStream('./images/test_products/' + file);
		// 	stream.pipe(res);
		// }

		// @Get('/reports/:file')
		// reportsFile(req, res) {
		// 	var file = req.params.file;
		// 	res.setHeader('Content-Type', 'application/octet-stream');
		// 	var stream = fs.createReadStream('./tmp_reports/' + file);
		// 	stream.pipe(res);
		// }

	}, {
		key: 'loginPage',
		value: function loginPage(req, res) {
			res.setHeader('Content-Type', 'text/html');
			var stream = _fs2.default.createReadStream('./html/login.html');
			stream.pipe(res);
		}
	}, {
		key: 'getForgeryToken',
		value: async function getForgeryToken(req, res) {

			var jwtAsync = _jwtAsync.JWTAsync.init('e8vh745v9o875w9v');
			var decoded = void 0;

			if (req.cookies["UserToken"]) {
				decoded = await jwtAsync.verify(req.cookies["UserToken"]);
			} else {
				return res.send({ redirect: "/login" });
			}

			if (decoded) {
				decoded.ForgeryToken = (0, _md2.default)(new Date().getTime() + decoded.userId);
				var token = await jwtAsync.sign(decoded);
				res.cookie("UserToken", token);
				var user = await _database2.default.collection('users').findOne({ _id: _mongoist2.default.ObjectId(decoded.userId) }, { permissions: 1 });
				return res.send({ ForgeryToken: decoded.ForgeryToken, permissions: user.permissions });
			} else {
				return res.status(401).send({ message: "UnAuthorized" });
			}
		}
	}, {
		key: 'wildCard',
		value: function wildCard(req, res) {
			res.setHeader('Content-Type', 'text/html');
			var stream = _fs2.default.createReadStream('./html/index.html');
			stream.pipe(res);
		}
	}]);

	return BootstrapApi;
}(), (_applyDecoratedDescriptor(_class.prototype, 'cssStyle', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'cssStyle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontFile', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'fontFile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontAwesome', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'fontAwesome'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssFile', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'cssFile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bootStrapPlugins', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'bootStrapPlugins'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bootstrapSwitch', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'bootstrapSwitch'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssAssets', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'cssAssets'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'globalCss', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'globalCss'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssLayouts', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'cssLayouts'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssThemes', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'cssThemes'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssPages', [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'cssPages'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cssFiles', [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'cssFiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bundles', [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'bundles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'electronApp', [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'electronApp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'storeFile', [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'storeFile'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'demoFiles', [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'demoFiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'demoIcons', [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'demoIcons'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'proppertyFiles', [_dec18], Object.getOwnPropertyDescriptor(_class.prototype, 'proppertyFiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getImages', [_dec19], Object.getOwnPropertyDescriptor(_class.prototype, 'getImages'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'loginPage', [_dec20], Object.getOwnPropertyDescriptor(_class.prototype, 'loginPage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getForgeryToken', [_dec21], Object.getOwnPropertyDescriptor(_class.prototype, 'getForgeryToken'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wildCard', [_dec22], Object.getOwnPropertyDescriptor(_class.prototype, 'wildCard'), _class.prototype)), _class));
;

exports.BootstrapApi = BootstrapApi;