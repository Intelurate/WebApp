import React, { Component } from 'react';
import { browserHistory, Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';
import { ResultsIndex, ResultsMain } from './results.js';
import { DetailsMain } from './details.js';
import { PurchaseOrderActions } from 'PurchaseOrderActions';

class Shop extends Component {

    constructor(props) {
        
        super(props);

        this.unlisten = browserHistory.listen( location =>  {
    
            var parts = location.hash.replace('#','').split('/');
            if(parts[1] !== 'shop'){
                this.props.dispatch(PurchaseOrderActions.loadSelectedPurchaseOrderAsync(parts[1]));
            }else{
                this.props.dispatch(PurchaseOrderActions.clearSelectedPurchaseOrder());
            }
        });

    }

    componentWillMount(){
        if(this.props.params.po_id){
            this.props.dispatch(PurchaseOrderActions.loadSelectedPurchaseOrderAsync(this.props.params.po_id));
        }else{
            this.props.dispatch(PurchaseOrderActions.clearSelectedPurchaseOrder());
        }
    }

    componentWillUnmount(){
        this.unlisten();
    }

    render() {

        return (
            <div>
                { this.props.children }
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        vendorList: state.vendor.get('vendorList'),
        items: state.shop.get('items')
    };
}

Shop = connect(mapStateToProps)(Shop);


const ShopMain = <Route key="shop" path="shop" component={Shop} >
                    {[ ResultsIndex, ResultsMain, DetailsMain ]}
                </Route>

const ShopUpdatePOMain = <Route key="shop" path=":po_id/shop" component={Shop} >
                    {[ ResultsIndex, ResultsMain, DetailsMain ]}
                </Route>


export { ShopMain, ShopUpdatePOMain };