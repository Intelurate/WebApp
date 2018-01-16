import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';
import { POListsIndex, POListsMain } from './purchase_order_list';
import { PODetailsMain } from './purchase_order_details.js';


class PurchaseOrder extends Component {

    constructor() {
        super();
    }

    render() {       
        return (
            <div>
                { this.props.children }
            </div>
        )

    }
}


// function mapStateToProps(state) {
//     return {
//         vendorList: state.vendor.get('vendorList'),
//         items: state.shop.get('items')
//     };
// }

// PurchaseOrder = connect(mapStateToProps)(PurchaseOrder);


const PurchaseOrderMain = <Route key="purchase_order" path="po" component={PurchaseOrder} >
                    {[ POListsIndex, POListsMain, PODetailsMain ]}
                </Route>

export { PurchaseOrderMain };