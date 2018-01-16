import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import UserActions from '../../actions/userActions';
import UserDataTable from './userDataTable';
import UserAdd from './userAdd';

class User extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { users } = this.props;
        let content = <UserDataTable users={users} />;   

        return (
            <div className="page-content">
                <h1 className="page-title"> Administration | <small>Settings</small>
                </h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="portlet box blue-hoki">

                            <div className="portlet-title">
                                <div className="caption">
                                    <i className="fa fa-list"></i>
                                    Users
                                </div>
                                <UserAdd />
                            </div>

                            <div className="portlet-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        {content}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>);
    }

}

function mapStateToProps(state) {
    return {
        users:    state.user.get('users'),
        pageSize: state.user.get('defaultPageSize')
    };
}

User = connect(mapStateToProps)(User);

const UserRoute = <Route key="user" path="/user" component={User} />;

export { UserRoute };