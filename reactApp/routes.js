import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/app';
import { HomeIndex, HomeMain } from 'components/home';
import { ShopMain, ShopUpdatePOMain } from 'components/shop';
import { PurchaseOrderMain } from 'components/manage_purchase_orders';

export default 
    <Route path = "/" component = {App} >
        { [ HomeIndex, HomeMain, ShopMain, ShopUpdatePOMain, PurchaseOrderMain ] }
    </Route>;