import Immutable from 'immutable';
import _ from 'lodash';
import Constants from '../constants';
//import * as Actions from '../actions/userActions';

const shopInitialState = {
    shop: Immutable.fromJS({
        search: "",

        adnavcedSearchShow: false,

        selectedItem: {},

        items: [],

        vendorFilter: [],

        perPage: 20,
        page:1,

        noPoWithItem: {
            status: 'inactive', //active, new, select 
            newFormField: ""
        } 
    })
};

function shopReducer(state = shopInitialState.shop, action) {
    switch (action.type) {

        case Constants.LOAD_VENDOR_ITEMS:
            state = state.updateIn(['items'], (data) => Immutable.fromJS(action.items));
            return state;
      
        case Constants.CLEAR_VENDOR_ITEM:
            state = state.updateIn(['selectedItem'], (data) => Immutable.fromJS({}));
            return state;

        case Constants.LOAD_SELECTED_ITEM:
            state = state.updateIn(['selectedItem'], (data) => Immutable.fromJS(action.selectedItem));
            return state;

        case Constants.CHANGE_NO_PO_MODAL_STATUS:
            state = state.updateIn(['noPoWithItem', 'status'], (data) => action.status);
            return state;
            
        case Constants.UPDATE_NEW_PO_TEXTFIELD:
            state = state.updateIn(['noPoWithItem', 'newFormField'], (data) => action.text);
            return state;
    
            
        case Constants.ADD_VENDOR_ITEM_TO_USE:
            
            let vendorItem = state.getIn(['selectedItem']);
            vendorItem = vendorItem.update('vendors', v=> v.filter( e => e.get('vendorId') == action.vendorId));            
            state = state.updateIn(['noPoWithItem', 'itemToAdd'], (data) => vendorItem.getIn(['vendors',0]) );

            return state;

        case Constants.UPDATE_VENDOR_ITEM_QTY:
            state = state.updateIn(['selectedItem', 'vendors'], v =>  v.map((v,i)=>{

                if(action.id === v.get('vendorId')) {
                    
                    console.log('value', action.value)

                    if(action.value === 'up'){
                        action.value = v.get('selectedQty') ? v.get('selectedQty') + 1 : 2;
                    }

                    if(action.value === 'down'){
                        action.value = v.get('selectedQty') ? v.get('selectedQty') - 1 : 1;
                    }

                    if(action.value === ""){
                        action.value = "";
                    }

                    console.log('valueaaaa', action.value)
                    
                    if(action.value < 1){
                        action.value = 1;
                    }

                    console.log('valuexx', action.value)
                    
                    action.value = "";
                    

                    return v = v.set('selectedQty', parseInt(action.value));                    
                }else{
                    return v;
                }
            }));
            return state;

        default:
            return state;
    }
}

export { shopReducer, shopInitialState };