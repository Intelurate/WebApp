import Immutable from 'immutable';
import _ from 'lodash';
import Constants from '../constants';
//import * as Actions from '../actions/userActions';

const vendorInitialState = {
    user: Immutable.fromJS({
        vendorList: [
            {
                _id: "hefu3h4867b483gv3ct24d762t",
                vendorName: "Dynotect",
                vendorKey: "dynotect"
            },
            {
                _id: "hefu3h4867b483gv3ct24d762t",
                vendorName: "Motion Industries",
                vendorKey: "motion_industries"                
            },
            {
                _id: "hefu3h4867b483gv3ct24d762t",
                vendorName: "Milltronics USA",
                vendorKey: "milltronics"                
            }            

        ]
    })
};

function vendorReducer(state = vendorInitialState.user, action) {

    switch (action.type) {
        case Constants.LOAD_VENDORS:
            state = state.updateIn(['items'], (data) => Immutable.fromJS(action.vendors));
            return state;

        default:
            return state;
    }
}

export { vendorReducer, vendorInitialState };