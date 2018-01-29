import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PageHeader, Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
// import { browserHistory, Link } from 'react-router';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(){}

    render() {
    
        let purchaseOrder;

        if(!_.isEmpty(this.props.selectedPurchaseOrder.toJS())){
            purchaseOrder = <li className="nav-item add-listing">
                                <a className="nav-link" href="my_listing_add.html"><span>
                                    <i className="fa fa-edit" aria-hidden="true"/>&nbsp;{ this.props.selectedPurchaseOrder.get('title') } - $1,233.98</span>
                                </a>
                            </li>

        }

        return (
            <nav key={"nav"} className="navbar navbar-expand-lg navbar-dark" id="menu" style={{zIndex: 1 }}>
                <div className="container">
                <a className="navbar-brand" href="index.html"><span className="icon-uilove-realestate"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-content" aria-controls="menu-content" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="menu-content">
                <ul className="navbar-nav mr-auto">                    
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Manage
                        </a>

                        <div className="dropdown-menu">
                            <a href="#po" className="dropdown-item">Purchase Orders</a>
                            <a href="#inventory" className="dropdown-item">Inventory</a>
                            <a href="agent.html" className="dropdown-item">Order Item Received</a>
                            
                        </div>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reports
                        </a>
                        <div className="dropdown-menu">
                            <a href="agent_list.html" className="dropdown-item">Submitted Order</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#calendar" role="button"  aria-haspopup="true" aria-expanded="false">
                            Calendar
                        </a>

                    </li>                    

                </ul>
                
                <ul className="navbar-nav ml-auto">
                    
                    {/* <li className="nav-item dropdown megamenu">                    
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Current Order $456.00
                        </a>
                        <div className="dropdown-menu">                           
                        </div>
                    </li> */}

                    <li className="nav-item dropdown user-account">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi, John</a>
                        <div className="dropdown-menu">
                            <a href="my_password.html" className="dropdown-item">Change Password</a>
                            <a href="my_notifications.html" className="dropdown-item">Notifications</a>
                            <a href="my_membership.html" className="dropdown-item">Membership</a>
                            <a href="my_account.html" className="dropdown-item">Account</a>
                            <a href="/logout" className="dropdown-item">Logout</a>
                        </div>
                    </li>
                    { purchaseOrder }

                </ul>
                
                </div>
                </div>
            </nav>
        )
    }
}


function mapStateToProps(state) {
    return {
        selectedPurchaseOrder: state.purchaseOrder.get('selectedPurchaseOrder')
    };
}

Header = connect(mapStateToProps)(Header);

export default Header;