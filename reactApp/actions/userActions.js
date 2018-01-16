import axios from 'axios';
import Constants from '../constants';
import { addNotification } from '../actions/notificationActions';
import DomainRoot from '../domainConfig';
import Promise from 'bluebird';
import passForgeryToken from '../passForgeryToken.js';

/* eslint-disable no-console */

let searchId = "";
let searchArray = [];

class UserActions {
    static loadUsers(users) {
        return {
            type: Constants.LOAD_USERS,
            users
        };   
    }

    static loadUserCounter(counter) {
        return {
            type: Constants.LOAD_USERS_COUNTERS,
            counter
        };
    }
  
    static showDeleteUserModal(bool) {
        return {
            type: Constants.SHOW_DELETE_USER_MODAL,
            value: bool
        };
    }

    static downloadList(list, ext, title, columns, orientation) {
        return {
            type: Constants.DOWNLOAD_USER_LIST,
            list,
            extension: ext,
            title,
            columns,
            orientation
        };
    }

    static updateUserToAdd(property, value) {
        return {
            type: Constants.UPDATE_USER_TO_ADD,
            property,
            value
        };
    }

    static showUpdateUserModal(bool) {
        return {
            type: Constants.SHOW_UPDATE_USER_MODAL,
            value: bool
        };
    }

    static selectedUser(property,value) {
        return {
            type: Constants.SELECTED_USER_ROW,
            property,
            value
        };
    }

    static updateSelectedRow(property,value) {
        return {
            type: Constants.UPDATE_SELECTED_USER_ROW,
            property,
            value
        }
    }   
    
    static updateForgeryToken(forgeryToken) {
        return {
            type: Constants.UPDATE_FORGERY_TOKEN,
            forgeryToken
        }
    }   

    static updateUserPermission(permissions) {
        return {
            type: Constants.UPDATE_USER_PERMISSIONS,
            permissions
        }
    }   

    // ===================================================================== //
    // ===================================================================== //
    // ========================== API: ASYNC CALLS ========================= //
    // ===================================================================== //
    // ===================================================================== //

    static getForgeryTokenAsync() {
        return async (dispatch) => {
            let response = await axios.get(`/api/getForgeryToken`);
            dispatch(UserActions.updateForgeryToken(response.data.ForgeryToken));
            dispatch(UserActions.updateUserPermission(response.data.permissions));
        };
    } 
      
}

export default UserActions;
