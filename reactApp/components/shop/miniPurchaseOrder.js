import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';


class PO extends Component {

    constructor() {
        super();
    }

    render() {

        return (
                <div style={{position: 'absolute', right:0, top:0 }}>
                    <div>Current Purchase Order</div>
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

// Shop = connect(mapStateToProps)(Shop);


// const ShopMain = <Route key="shop" path="shop" component={Shop} >
//                     {[ ResultsIndex, ResultsMain, DetailsMain ]}
//                 </Route>

export default PO;