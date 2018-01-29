'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShopApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

var _mongoist = require('mongoist');

var _mongoist2 = _interopRequireDefault(_mongoist);

var _database = require('../modules/database');

var _database2 = _interopRequireDefault(_database);

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

var ShopApi = (_dec = (0, _expressDecorator.Get)("/api/vendor_items"), _dec2 = (0, _expressDecorator.Get)("/api/vendor_items/:item_id"), (_class = function () {
    function ShopApi() {
        _classCallCheck(this, ShopApi);
    }

    _createClass(ShopApi, [{
        key: 'getVendorItems',
        value: async function getVendorItems(req, res) {
            var items = await _database2.default.vendorItems.find({});
            return res.send(items);
        }
    }, {
        key: 'getVendorItem',
        value: async function getVendorItem(req, res) {
            var item_id = req.params.item_id;
            var item = await _database2.default.vendorItems.findOne({ _id: _mongoist2.default.ObjectId(item_id) });
            res.send(item);
        }
    }]);

    return ShopApi;
}(), (_applyDecoratedDescriptor(_class.prototype, 'getVendorItems', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'getVendorItems'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getVendorItem', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'getVendorItem'), _class.prototype)), _class));
exports.ShopApi = ShopApi;