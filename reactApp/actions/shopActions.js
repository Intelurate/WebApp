import axios from 'axios';
import Constants from '../constants';
import Promise from 'bluebird';

import passForgeryToken from '../passForgeryToken.js';

class ShopActions {
    
    static updateVendorItemQty(value, id) {
        return {
            type: Constants.UPDATE_VENDOR_ITEM_QTY,
            value,
            id
        };
    }

    static loadSelectedItem(selectedItem) {
        return {
            type: Constants.LOAD_SELECTED_ITEM,
            selectedItem
        };
    }

    static loadVendorItems(items) {
        return {
            type: Constants.LOAD_VENDOR_ITEMS,
            items
        };
    }

    static clearSelectedItem() {
        return {
            type: Constants.CLEAR_VENDOR_ITEM
        };
    }

    static changeNoPOModal(status) {
        return {
            type: Constants.CHANGE_NO_PO_MODAL_STATUS,
            status
        };
    }

    static updateNewPOTextField(text) {
        return {
            type: Constants.UPDATE_NEW_PO_TEXTFIELD,
            text
        };
    }
  
    static addVendorItemToUse(vendorId) {
        return {
            type: Constants.ADD_VENDOR_ITEM_TO_USE,
            vendorId
        };
    }

    static loadSelectedItemAsync(item_id) {
        return async (dispatch) => { 
            dispatch(ShopActions.clearSelectedItem());            
            let response = await axios.get(`/api/vendor_items/${item_id}`);        
            dispatch(ShopActions.loadSelectedItem(response.data));
        };
    }

    static getVendorItemsAsync() {
        return async(dispatch) => { 
            let response = await axios.get(`/api/vendor_items`);
            dispatch(ShopActions.loadVendorItems(response.data));
        };
    }

    static createNewPurchaseOrderWithItemAsync(selectedItem, noPoWithItem) {
        return async (dispatch) => { 

            let response = await axios.post(`/api/purchase_order/add`, passForgeryToken({ 
                poTitle: noPoWithItem.get('newFormField'), 
                itemId: selectedItem.get('_id'), 
                qty: noPoWithItem.getIn(['itemToAdd', 'selectedQty']) || 1,
                vendorId: noPoWithItem.get('vendorId') 
            }))
            
            if(response.data.created){
                window.location.hash = `${response.data.poId}/shop/`
            }

        };
    }

}

export { ShopActions };