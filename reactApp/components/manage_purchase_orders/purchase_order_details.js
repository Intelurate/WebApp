import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';

//import { RenderTitle } from './renderTitle';

class PurchaseOrdersDetails extends Component {

    constructor() {
        super();
    }

    
    render() {

        return (<div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-12 col-xl-12">
                            Details
                        </div>
                    </div>
                </div>
            </div>)

    }
}

function mapStateToProps(state) {
    return {
        purchaseOrder: state.purchaseOrder
    };
}

PurchaseOrdersDetails = connect(mapStateToProps)(PurchaseOrdersDetails);

const PODetailsMain = <Route key="results" path=":po_id" component={PurchaseOrdersDetails} />


export { PODetailsMain };