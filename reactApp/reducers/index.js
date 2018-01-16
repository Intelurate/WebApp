import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer } from './userReducer';
import { shopReducer } from './shopReducer';
import { vendorReducer } from './vendorReducer';
import { purchaseOrderReducer } from './purchaseOrderReducer';
import { orderReducer } from './orderReducer';
import { vendorPurchaseOrderReducer } from './vendorPurchaseOrderReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
    shop: shopReducer,
    vendor: vendorReducer,
    purchaseOrder: purchaseOrderReducer,
    order: orderReducer,
    vendorPurchaseOrder: vendorPurchaseOrderReducer
});

export default rootReducer;
