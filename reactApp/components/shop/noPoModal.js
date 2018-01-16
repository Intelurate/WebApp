import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';

import { RenderTitle } from './renderTitle';

import { ShopActions } from 'ShopActions';

import Modal from 'react-modal';

import _ from 'underscore';


class POModal extends Component {

    constructor() {
        super();
    }

    componentWillMount(){
    //    this.props.dispatch(ShopActions.loadSelectedItemAsync(this.props.params.item_id));
    }
    
    selectCreateNewPO(){
        this.props.dispatch(ShopActions.changeNoPOModal('new'));
    }

    selectFromExistingPO(){
        this.props.dispatch(ShopActions.changeNoPOModal('select'));
    }

    updateNewPurchaseOrderTitle(text){
        this.props.dispatch(ShopActions.updateNewPOTextField(text));
    }

    createNewPurchaseOrderWithItem(){
        this.props.dispatch(ShopActions.createNewPurchaseOrderWithItemAsync(this.props.selectedItem, this.props.noPoWithItem));
    }

    closeNewPurchaseOrderModal(){
        this.props.dispatch(ShopActions.changeNoPOModal('inactive'));        
    }

    render() {

        const customStyle = {
            content : {
                top : '50%',
                left : '50%',
                right : 'auto',
                bottom : 'auto',
                marginRight : '-50%',
                transform : 'translate(-50%, -50%)'
            }
        }

        let content;

        if(this.props.noPoWithItem.get('status') === 'inactive' ){
            return <span/>;
        }

        
        if(this.props.noPoWithItem.get('status') === 'active'){
            content = <div>
                            <h4>Purchase Order Options</h4>
                            <p style={{ textAlign: 'center' }}>
                                    <span style={{color: '#3680f7', cursor: 'pointer' }} onClick={e=>this.selectCreateNewPO()}>Create New Purchase Order</span>
                                    <br/>or<br/>
                                    <span style={{color: '#3680f7', cursor: 'pointer' }} onClick={e=>this.selectFromExistingPO()}>Add to Existing Purchase Order</span>
                                </p>
                        </div>
        }else if(this.props.noPoWithItem.get('status') === 'new'){

            content = <div>
                            <h4>Add Item With New Purchase Order</h4>
                          
                            <label htmlFor="po-title">Purchase Order Title</label>
                            <div className="input-group">
                                <input onChange={e=>this.updateNewPurchaseOrderTitle(e.target.value)} value={this.props.noPoWithItem.get('newFormField')} type="text" className="form-control" id="po-title" />
                            </div>
                            <br/>
                            <div style={{ float: 'right', marginTop: '8px' }}>
                                <button onClick={e=>this.createNewPurchaseOrderWithItem()} type="button" className="btn btn-primary">Create Purchase Order</button>
                            </div>
                        </div>



        }else if(this.props.noPoWithItem.get('status') === 'select'){
            content = <div>
                        <h4>Purchase Order Options</h4>
                        <p style={{ textAlign: 'center' }}>
                                <span style={{color: 'blue', cursor: 'pointer' }} onClick={e=>this.createNewPO()}>Create New Purchase Order</span>
                                <br/>or<br/>
                                <span style={{color: 'blue', cursor: 'pointer' }} onClick={e=>this.selectFromExistingPO()}>Add to Existing Purchase Order</span>
                            </p>
                    </div>

        }

        return <Modal
            isOpen={true}
            // onAfterOpen={afterOpenFn}
            // onRequestClose={requestCloseFn}
            // closeTimeoutMS={1200}
            ariaHideApp={false}
            style={customStyle}
            contentLabel="Modal">

            <div onClick={e=>this.closeNewPurchaseOrderModal()} style={{ cursor: 'pointer', position: 'absolute', top: 0, right: 0 , width: 30, height: 30, textAlign: 'center' }}>
                <span className={"fa fa-times"}/>
            </div>

            { content }

        </Modal>

      

    }
}

function mapStateToProps(state) {
    return {
        selectedItem: state.shop.get('selectedItem'),
        noPoWithItem: state.shop.get('noPoWithItem')
    };
}

POModal = connect(mapStateToProps)(POModal);

export { POModal };