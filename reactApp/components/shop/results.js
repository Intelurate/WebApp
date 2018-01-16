import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';

import { RenderTitle } from './renderTitle';

import { ShopActions } from 'ShopActions';


class Results extends Component {

    constructor() {
        super();
    }

    componentWillMount(){
        this.props.dispatch(ShopActions.getVendorItemsAsync());
    }

    renderCustomerId(title, id){
        if(id !== undefined){
            return <div key={id}><strong>{title}:</strong> {id}</div>
        }else{
            return <span key={id}/>
        }
    }

    loadVendorItemDetails(id){
        if(this.props.params.po_id){
            window.location.hash = `/${this.props.params.po_id}/shop/${id}`;
        }else{
            window.location.hash = `/shop/${id}`;
        }
    }

    renderItem(item, i) {

        let priceRange = { low: 0, high: 0 }
        let price = "";
        let totalInventory = 0;

        item.get('vendors').forEach((v,i)=>{
            
            totalInventory += parseInt(v.get('inventory'));

            if(i === 0){
                priceRange.low = v.get('buyerPrice');
                priceRange.high = v.get('buyerPrice');
            }else{
                if(v.get('buyerPrice') < priceRange.low){
                    priceRange.low = v.get('buyerPrice');
                }
                if(v.get('buyerPrice') > priceRange.high){
                    priceRange.high = v.get('buyerPrice');
                }
            }

        })

        if(priceRange.low === priceRange.high){
            price = accounting.formatMoney(priceRange.low*.01);             
        }else{
            price = 
                accounting.formatMoney(priceRange.low*.01) + ' - ' + accounting.formatMoney(priceRange.high*.01);
        }

        return <div key={i} className="item" data-aos="fade-up">
            <div className="row">

                <div className="col-lg-3">
                    <div className="item-image">
                        <a href="property_single.html">
                            <img src={item.get('imgUrl')} className="img-fluid" alt="" />
                        </a>
                        <a href="#" className="save-item">
                            <i className="fa fa-star" />
                        </a>
                    </div>
                </div>

                <div className="col-lg-9">
                    <div className="item-info">                    
                        <h3 className="item-title">
                            <a onClick={e=>this.loadVendorItemDetails(item.get('_id')) } href="javascript:void(0)">{ item.get('title') }</a>
                        </h3>
                        <div className="item-location">
                            { item.get('tradeMark') }
                        </div>
                        <div className="item-details-i">
                            <p>{ item.get('itemBlurb') }</p> 
                            
                            <RenderTitle key={"partId"} title={'Part Id'} id={item.get('partId')} />
                            <RenderTitle key={"pkgType"} title={'Package Type'} id={item.get('pkgType')} />
                            <RenderTitle key={"per_pkg"} title={'Per Package'} id={item.get('per_pkg')} />
                            <RenderTitle key={"sku"} title={'Sku'} id={item.get('sku')} />
                            <RenderTitle key={"modelNo"} title={'Model No'} id={item.get('modelNo')} />
                            <RenderTitle key={"manufacturingId"} title={'Manufacturing Id'} id={item.get('manufacturingId')} />
                            <RenderTitle key={"manufacturingPartNo"} title={'Manufacturing Part No'} id={item.get('manufacturingPartNo')} /> 
                    
                            <br/>
                            <div>
                                <div style={{float: 'left' }}>
                                    <div style={{ fontSize: 20 }}>{ price }</div>
                                    <div>Available: { totalInventory }</div>
                                </div>
                                <div style={{float: 'right', marginTop: 8 }}>
                                    <button onClick={e=>this.loadVendorItemDetails(item.get('_id')) } type="button" className="btn btn-primary">View Options</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


    renderItems(){
        let items = this.props.items.map((v, i)=>{
            return this.renderItem(v,i);
        })

        return <div className="item-listing list">
                    { items }
                </div>
    }

    renderVendor(v,i){
        return <div key={i} className="checkbox ">
                <input type="checkbox" value="1" id={v.get('vendorKey')}/>
                <label htmlFor={v.get('vendorKey')}>{ v.get('vendorName') }</label>
            </div>
    }

    renderVendorFilter(){

        let vendors = this.props.vendorList.map((v,i)=>{
            return this.renderVendor(v,i);
        })
        return <div className="card">
                    <div className="card-header">
                    <h4 className="panel-title"> 
                        <a data-toggle="collapse" data-parent="#accordion" href="#p_type" aria-expanded="true" aria-controls="p_type">
                            Vendors <i className="fa fa-caret-down float-right"></i> 
                        </a>
                    </h4>
                    </div>

                    <div id="p_type" className="panel-collapse collapse show">
                    <div className="card-body">
                        { vendors }
                    </div>
                    </div>
                </div>
    }
    
    render() {

        return (
            <div>
            
                <div className="container">

                    <div className="search-form">
                        <div className="card">

                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search sku or description"/>
                                    </div>
                                </div>     
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <button style={{ width: '100%'}} type="submit" className="btn btn-lg btn-primary btn-block">Add Search Key</button>
                                    </div>
                                </div>              
                            </div>

                                                       
                            <div className="advanced_filters">

                                <div className="advanced_toggle">
                                    <div key="advanced_search" className="checkbox ">
                                        <input type="checkbox" value="1" id="advanced_search"/>
                                        <label htmlFor="advanced_search">Advanced Search</label>
                                    </div>
                                </div>

                                <div className="advanced_key_search">
                                    <ul>
                                        
                                        <li>Search Key <span className="fa fa-times as_remove"/></li>
                                        <li>Search Key <span className="fa fa-times as_remove"/></li>
                                        <li>Search Key <span className="fa fa-times as_remove"/></li>

                                    </ul>
                                </div>
                            </div>

                            {/*  
                            <div>
                                Advamnced Search Section
                            </div> 
                            */}


                        </div>
                    </div> 
                </div>

                <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-12 col-xl-12">
                    <div className="row has-sidebar">
                    <div className="col-md-4 col-lg-3">
                        <button id="toggle-filters" className="btn btn-primary btn-circle mobile-filter"><i className="fa fa-filter"></i></button>
                        <div id="sidebar" className="sidebar-left">
                        <button className="close-panel btn btn-white"><i className="fa fa-long-arrow-left"></i></button>
                        <div className="sidebar_inner">
                        <div id="filters">                        
                            { this.renderVendorFilter() }
                        </div>
                        </div>
                        </div>
                    </div>

                        {/* ITEMS */}
                                        
                        <div className="col-md-8 col-lg-9">
                        
                        <div className="sorting">
                            <div className="row justify-content-between">
                                <div className="col-sm-5 col-md-5 col-lg-4 col-xl-3" />
                                <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3" />
                            </div>
                        </div>
                        
                        <div className="clearfix" />
                                                
                        { this.renderItems() }

                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">sssss</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">dddd</a>
                                </li>
                            </ul>
                        </nav>
                        
                        </div>

                        {/* END ITEMS */}

                    </div>
                    </div>
                    </div>
                </div>
            </div>                    
        )

    }
}

function mapStateToProps(state) {
    return {
        vendorList: state.vendor.get('vendorList'),
        items: state.shop.get('items')
    };
}

Results = connect(mapStateToProps)(Results);


const ResultsIndex = <IndexRoute key="results_index" component={Results} />
const ResultsMain = <Route key="results" path="" component={Results} />


export { ResultsIndex, ResultsMain };