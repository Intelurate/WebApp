'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PurchaseOrderApi = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

var _mongoist = require('mongoist');

var _mongoist2 = _interopRequireDefault(_mongoist);

var _database = require('../modules/database');

var _database2 = _interopRequireDefault(_database);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _expressDecorator = require('../modules/express-decorator');

var _authorize = require('../modules/authorize');

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

var PurchaseOrderApi = (_dec = (0, _expressDecorator.Get)("/api/purchase_orders/:po_id?"), _dec2 = (0, _expressDecorator.Get)("/api/purchase_orders/create"), _dec3 = (0, _expressDecorator.Post)("/api/purchase_order/add/:po_id?", true), (_class = function () {
    function PurchaseOrderApi() {
        _classCallCheck(this, PurchaseOrderApi);
    }

    _createClass(PurchaseOrderApi, [{
        key: 'getPurchaseOrders',
        value: async function getPurchaseOrders(req, res) {
            var data = {};

            if (req.params.po_id) {
                data = { po: { _id: req.params.po_id } };
            }

            await this.getPurchaseOrdersAsync(data);
            return res.send(data.purchaseOrders);
        }
    }, {
        key: 'createPurchaseOrders',
        value: async function createPurchaseOrders(req, res) {
            await this.createPurchaseOrdersAsync(res.locals.user._id.toString(), req.body.title);
            res.send({ created: true });
        }
    }, {
        key: 'addItemToPO',
        value: async function addItemToPO(req, res) {

            if (!req.params.po_id) {

                try {
                    var data = {};
                    await this.createPurchaseOrdersAsync(data, res.locals.user._id.toString(), req.body.poTitle);
                    await this.getPurchaseOrdersAsync(data);
                    await this.getVendorItemAsync(data, req.body.itemId);
                    await this.saveItemToPurchaseOrder(data, req.body.vendorId, req.body.qty);
                    return res.send({ created: true, poId: data.purchaseOrders._id });
                } catch (err) {
                    console.log('errororo', err);
                    return res.send({ error: err });
                }
            }
        }
    }, {
        key: 'getPurchaseOrdersAsync',
        value: async function getPurchaseOrdersAsync(data) {

            var id = void 0;
            if (data.po) {
                id = data.po._id.toString();
            }

            if (!id) {
                data.purchaseOrders = await _database2.default.purchaseOrders.find({});
            } else {
                data.purchaseOrders = await _database2.default.purchaseOrders.findOne({ _id: _mongoist2.default.ObjectId(id) });
            }
        }
    }, {
        key: 'createPurchaseOrdersAsync',
        value: async function createPurchaseOrdersAsync(data, userId, title) {

            var po = {
                title: title,
                billingOfMaterials: {
                    orderQty: 1
                },
                createdByUserId: userId,
                recurringOrdering: {
                    status: false,
                    intervalType: 'days', //week,month
                    intervals: 2,
                    startDate: new Date()
                },
                items: [],
                createdDate: new Date()
            };

            data.po = await _database2.default.purchaseOrders.insert(po);
        }
    }, {
        key: 'getVendorItemAsync',
        value: async function getVendorItemAsync(data, itemId) {
            var vendorItem = await _database2.default.vendorItems.findOne({ _id: _mongoist2.default.ObjectId(itemId) });
            data.vendorItem = vendorItem;
        }
    }, {
        key: 'saveItemToPurchaseOrder',
        value: async function saveItemToPurchaseOrder(data, vendorId, qty) {
            var update = {
                $push: {
                    'items': { qty: qty, vendorId: vendorId }
                }
            };
            await _database2.default.purchaseOrders.update({ _id: _mongoist2.default.ObjectId(data.purchaseOrders._id.toString()) }, update);
        }
    }]);

    return PurchaseOrderApi;
}(), (_applyDecoratedDescriptor(_class.prototype, 'getPurchaseOrders', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'getPurchaseOrders'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createPurchaseOrders', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'createPurchaseOrders'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addItemToPO', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'addItemToPO'), _class.prototype)), _class));
exports.PurchaseOrderApi = PurchaseOrderApi;