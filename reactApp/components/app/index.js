import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Notification from 'components/notificationSystem';
import Header from 'components/header';
import Footer from 'components/footer';
import Sidebar from 'components/sidebar';
// import WorkcenterActions from '../../actions/workcenterActions';
// import CompanyActions from '../../actions/companyActions';
// import VarianceActions from '../../actions/varianceActions';
import UserActions from 'actions/userActions';
// import PositionManagementActions from '../../actions/positionManagementActions';

//import store from '../store';

class Init extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }
    
    render() {

        return (
            <div id="main">
                <Header/>
                { this.props.children }             
                <Footer/>
            </div>
        )
    }

}



class Main extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.dispatch(UserActions.getForgeryTokenAsync());            
    }
    
    render() {
        
        if(this.props.user.get('forgeryToken')){
            return <Init {...this.props} />;
        }

        return (
            <div>
                <p style={{ position: 'absolute', color: "#fff" }}>Loading...</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}


export default connect(mapStateToProps)(Main);