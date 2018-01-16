import React, { Component } from 'react';
import { connect } from 'react-redux';

class Permission extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!_.isMatch(this.props.user.get('permissions').toJS(), this.props.permissions)) {
            if(this.props.message){
                return <div>{ this.props.message }</div>;
            }
            return <span />;
        }

        return <div>{this.props.children}</div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

Permission = connect(mapStateToProps)(Permission);

export default Permission;