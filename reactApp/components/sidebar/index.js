import React, { Component } from 'react';

class SideBar extends Component {
    render() {

        return (
            <div>
                {/* <!-- BEGIN SIDEBAR --> */}
                <div className="page-sidebar-wrapper">
                    <div className="page-sidebar navbar-collapse collapse" >
                        <ul className="page-sidebar-menu  page-header-fixed"
                            data-keep-expanded="false"
                            data-auto-scroll="true"
                            data-slide-speed="200" >

                            {/* <!-- BEGIN SIDEBAR TOGGLER BUTTON --> */}
                            <li className="sidebar-toggler-wrapper hide">
                                <div className="sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                            {/* <!-- END SIDEBAR TOGGLER BUTTON --> */}

                            <li className="nav-item start ">
                                <a href="#/" className="nav-link nav-toggle">
                                    <i className="fa fa-home"></i>
                                    <span className="title">Home</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>

                            <li className="nav-item start ">
                                <a href="#/reports" className="nav-link nav-toggle">
                                    <i className="fa fa-print"></i>
                                    <span className="title">Reports</span>
                                    <span className="arrow"></span>
                                </a>
                            </li>

                            <li className="nav-item start ">
                                <a className="nav-link nav-toggle">
                                    <i className="fa fa-cog"></i>
                                    <span className="title">Administration</span>
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu" style={{ display: 'block' }}>

                                    <li className="nav-item">
                                        <a href="#/variance" className="nav-link">
                                            <i className="fa fa-plus-square"></i> Variances</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#/workcenter" className="nav-link">
                                            <i className="fa fa-circle-o"></i> Workcenters</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/company" className="nav-link">
                                            <i className="fa fa-building-o"></i> Companies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#/employee" className="ajaxify nav-link">
                                            <i className="fa fa-user-md"></i> Employees</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#/position_management" className="ajaxify nav-link">
                                            <i className="fa fa-cubes"></i> Positions Management</a>
                                    </li>

                                    <li className="nav-item">
                                    <a href="#/user" className="ajaxify nav-link">
                                        <i className="fa fa-users"></i> Users</a>
                                </li>                                    

                                </ul>

                            </li>

                        </ul>
                    </div>
                </div>
                {/* <!-- END SIDEBAR --> */}
            </div>
        );
    }
}

export default SideBar;

