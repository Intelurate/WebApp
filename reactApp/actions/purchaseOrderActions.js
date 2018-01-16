import axios from 'axios';
import Constants from '../constants';
import { addNotification } from '../actions/notificationActions';
import DomainRoot from '../domainConfig';
import Promise from 'bluebird';

import passForgeryToken from '../passForgeryToken.js';

/* eslint-disable no-console */


class PurchaseOrderActions {

    
    static clearSelectedPurchaseOrder() {
        return {
            type: Constants.CLEAR_SELECTED_PURCHASE_ORDER
        };   
    }

    static togglePurchaseOrderModal(status) {
        return {
            type: Constants.TOGGLE_NEW_PURCHASE_ORDER_MODAL,
            status
        };   
    }

    static updateNewPurchaseOrderTitle(text) {
        return {
            type: Constants.UPDATE_NEW_PURCHASE_TITLE_FIELD,
            text
        };   
    }

    static loadPurchaseOrders(pos) {
        return {
            type: Constants.LOAD_PURCHASE_ORDERS,
            pos
        };   
    }

    static loadSelectedPurchaseOrders(purchaseOrder) {
        return {
            type: Constants.SELECTED_PURCHASE_ORDER,
            purchaseOrder
        };   
    }


    static getPurchaseOrdersAsync() {
        return async (dispatch) => {
            let response = await axios.get(`/api/purchase_orders`, { page: 1 });    
            dispatch(PurchaseOrderActions.loadPurchaseOrders(response.data));       
        };
    }

    static createNewPurchaseOrderAsync(text) {

        return async (dispatch) => {
            let response = await axios.post(`/api/purchase_orders/create`, passForgeryToken({ title: text }) )            
            if(response.data.created){
                dispatch(PurchaseOrderActions.getPurchaseOrdersAsync());
                dispatch(PurchaseOrderActions.togglePurchaseOrderModal(false));
            }
        };
    }

    static loadSelectedPurchaseOrderAsync(po_id) {
        return async (dispatch) => {
            let response = await axios.get(`/api/purchase_orders/${po_id}`);
            dispatch(PurchaseOrderActions.loadSelectedPurchaseOrders(response.data));
        };
    }

}

export { PurchaseOrderActions };