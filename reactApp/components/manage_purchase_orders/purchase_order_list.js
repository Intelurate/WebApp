import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';

//import { RenderTitle } from './renderTitle';
import { PurchaseOrderActions } from 'purchaseOrderActions';

import Modal from 'react-modal';

class PurchaseOrdersResults extends Component {

    constructor() {
        super();
    }

    componentWillMount(){
        this.props.dispatch(PurchaseOrderActions.getPurchaseOrdersAsync());
    }

    openNewPurchaseOrderModal(){
        this.props.dispatch(PurchaseOrderActions.togglePurchaseOrderModal(true));
    }

    closeNewPurchaseOrderModal(){
        this.props.dispatch(PurchaseOrderActions.togglePurchaseOrderModal(false));
    }

    updateNewPurchaseOrderTitle(text){
        this.props.dispatch(PurchaseOrderActions.updateNewPurchaseOrderTitle(text));
    }

    createNewPurchaseOrder(){
        this.props.dispatch(PurchaseOrderActions.createNewPurchaseOrderAsync(this.props.newPurchaseOrder.getIn(['form', 'title'])));
    }

    poDetails(id){
        window.location.hash = `po/${id}`;
    }

    renderPoList(){

        let items = this.props.pos.map((v,i)=>{

            return <tr key={i} style={{cursor: 'pointer'}} onClick={e=>this.poDetails(v.get('_id'))}>
                        <td>{v.get('title')}</td>
                        <td>$1,234.53</td>
                        <td>$124.53</td>
                        <td>$234.53</td>
                        <td>$1,634.53</td>                                       
                    </tr>
        })
        return <tbody>{items}</tbody>;
    }

    renderCreatePOModal() {

        const customStyle = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        }

        if(!this.props.newPurchaseOrder.get('status')){
            return <span/>
        }
        
        return <Modal
            isOpen={true}
            // onAfterOpen={afterOpenFn}
            // onRequestClose={requestCloseFn}
            // closeTimeoutMS={1200}
            ariaHideApp={false}
            style={customStyle}
            contentLabel="Modal">

            <h4>Create New Purchase Order</h4>

            <div onClick={e=>this.closeNewPurchaseOrderModal()} style={{ cursor: 'pointer', position: 'absolute', top: 0, right: 0 , width: 30, height: 30, textAlign: 'center' }}>
                <span className={"fa fa-times"}/>
            </div>
            
            <label htmlFor="po-title">Purchase Order Title</label>
            <div className="input-group">
                <input onChange={e=>this.updateNewPurchaseOrderTitle(e.target.value)} value={this.props.newPurchaseOrder.getIn(['form', 'title'])} type="text" className="form-control" id="po-title" />
            </div>
            <br/>
            <div style={{ float: 'right', marginTop: '8px' }}>
                <button onClick={e=>this.createNewPurchaseOrder()} type="button" className="btn btn-primary">Create Purchase Order</button>
            </div>

        </Modal>
    }
    

    render() {

        return (<div>
                { this.renderCreatePOModal() }    
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-12 col-xl-12">
                            <div>
                                <h4 style={{float: 'left'}}>Manage Purchase Orders</h4>
                                <p style={{float: 'right'}} onClick={e=>this.openNewPurchaseOrderModal()}>
                                    <a href="javascript:void(0)">Create New Purchase Order</a>
                                </p>

                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>SubTotal</th>
                                        <th>Shipping</th>
                                        <th>Tax</th>                                       
                                        <th>Total</th>                 
                                    </tr>
                                </thead>    
                                { this.renderPoList() }                                 
                            </table>
                        
                        </div>
                    </div>
                </div>
            </div>)

    }
}

function mapStateToProps(state) {
    return {
        newPurchaseOrder: state.purchaseOrder.get('newPurchaseOrder'),
        pos: state.purchaseOrder.get('pos'),
        purchaseOrder: state.purchaseOrder
    };
}

PurchaseOrdersResults = connect(mapStateToProps)(PurchaseOrdersResults);

const POListsIndex = <IndexRoute key="results_index" component={PurchaseOrdersResults} />
const POListsMain = <Route key="results" path="" component={PurchaseOrdersResults} />


export { POListsIndex, POListsMain };