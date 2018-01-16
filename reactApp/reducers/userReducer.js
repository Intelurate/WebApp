import Immutable from 'immutable';
import _ from 'lodash';
import Constants from '../constants';
import * as Actions from '../actions/userActions';

//import fileUtil from './fileUtilityClass';

// User Initial State
const userInitialState = {
    user: Immutable.fromJS({
        permissions: {},
        forgeryToken: undefined
    })
};

function userReducer(state = userInitialState.user, action) {
    switch (action.type) {

        case Constants.UPDATE_USER_PERMISSIONS:
            state = state.updateIn(['permissions'], (data) => action.permissions);
            return state;

        case Constants.UPDATE_FORGERY_TOKEN:
            state = state.updateIn(['forgeryToken'], (data) => action.forgeryToken);
            return state;

        default:
            return state;
    }
}

export { userReducer, userInitialState };