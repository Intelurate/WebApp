import _ from 'underscore';
import User from './user';
import Shop from './shop';
import Vendor from './vendor';
import PurchaseOrder from './purchaseOrder';
import Order from './order';
import VendorPurchaseOrder from './vendorPurchaseOrder';

const constants = _.extend({}, User, Shop, Vendor, PurchaseOrder, Order, VendorPurchaseOrder);

export default (constants);