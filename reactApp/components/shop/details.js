import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import accounting from 'accounting';

import { RenderTitle } from './renderTitle';

import { ShopActions } from 'ShopActions';

import Modal from 'react-modal';

import _ from 'underscore';

import { POModal } from './noPOModal';


class Details extends Component {

    constructor() {
        super();
    }

    componentWillMount(){
        this.props.dispatch(ShopActions.loadSelectedItemAsync(this.props.params.item_id));
    }
    
    upDownValues(e, vendorId){
        if (e.keyCode === 38) {
            this.props.dispatch( ShopActions.updateVendorItemQty('up', vendorId) );
        } else if (e.keyCode === 40) {
            this.props.dispatch( ShopActions.updateVendorItemQty('down', vendorId) );
        }
    }

 

    addItemToPurchaseOrder(){
        
    }
    
    
    addItemToPO(vendorId) {

        if(this.props.params.po_id){
//            this.addItemToPurchaseOrder();
        }else{
            this.props.dispatch(ShopActions.changeNoPOModal('active'));
            this.props.dispatch(ShopActions.addVendorItemToUse(vendorId));
        }
        
    }

    renderHeaderTitles(){


        let tradeMark = this.props.selectedItem.get('tradeMark') !== undefined ? <small>{ this.props.selectedItem.get('tradeMark') }</small> : <span/>;

        let titleSection = <h1>{ this.props.selectedItem.get('title') } { tradeMark }</h1>;
    
        return <div className="container">
                    <div className="row justify-content-md-center">
                            <div className="col col-md-12 col-lg-12 col-xl-12">
                        <div className="page-header bordered mb0">
                            <div className="row">
                                <div className="col-md-12">
                                    { titleSection }
                                    <div style={{position: 'absolute', right:0, top:0 }}>
                                        <div><span className="fa fa-list-alt"/> Continue Building Order</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
    }

    renderVendorShipping(v, i) {

        // Needs to get Shipping cost from shipping rules or vendor
        // This will probbaly be different for every vendor
        return [1,2,3].map((v,e)=>{
                return <tr key={`shipping_${e}_${i}`}>
                            <td style={{border: 'none', paddingTop: 0, paddingBottom: 0}} colSpan={3}>
                                <label><input type="radio" name="mot_shipping" />&nbsp;&nbsp;Next Day UPS</label>
                            </td>
                            <td style={{border: 'none', paddingTop: 0, paddingBottom: 0}}><div style={{float: 'right'}}>$4.32</div></td>
                        </tr>
        })

    }

    updateVendorItemQty(value, id)  {
        this.props.dispatch( ShopActions.updateVendorItemQty(value, id) );
    }

    renderVendorPrice(v,i){

        let shipping = this.renderVendorShipping(v, i);

        let vendorDetails = [];

        let qty  = v.get('selectedQty') ? v.get('selectedQty') : 1;

        vendorDetails.push(
            <tr key={`title_${i}`}>
                <td>Motion Industries</td>
                <td><div style={{ textAlign: 'center' }}>12</div></td>
                <td>
                    <input onKeyDown={e=>this.upDownValues(e, v.get('vendorId'))} onChange={e=>this.updateVendorItemQty(e.target.value, v.get('vendorId') )} value={qty} style={{ width: 35, textAlign: 'center' }} type="text" />
                </td>                                                                
                <td><div style={{float: 'right'}}>$12.83</div></td>
            </tr>
        )
        vendorDetails = vendorDetails.concat(shipping);
        vendorDetails.push(
            <tr key={`add_${i}`}>
                <td style={{border: 'none', paddingTop: 0, paddingRight:'0px' }} colSpan={4}>
                    <div style={{float: 'right'}}>
                        <button onClick={ e=>this.addItemToPO(v.get('vendorId')) } type="button" className="btn btn-primary btn-sm">Add to Purchase Order</button>
                    </div>
                </td>
            </tr>
        )

        return vendorDetails;

    }

    renderItemsFromVendors(){
       

        let vendorItems = [];
        this.props.selectedItem.get('vendors').forEach((v,i)=>{
            vendorItems = vendorItems.concat( this.renderVendorPrice(v,i));
        });

        return vendorItems;
    }


    render() {

        let item = this.props.selectedItem;

        if(_.isEmpty(item.toJS())){
            return <span/>;
        }


        let descriptions = this.props.selectedItem.get('descriptions') ? 
                                <div>
                                    { this.props.selectedItem.get('descriptions').map((v,i)=>{ return <p key={i}>{v}</p>  }) }
                                </div> 
                            : <span/>;

        let bullets = this.props.selectedItem.get('bullets') ? 
                            <div>
                            <ul style={{ paddingLeft : '20px' }}>
                                { this.props.selectedItem.get('bullets').map((v,i)=>{ return <li key={i}>{v}</li>  }) }
                            </ul>
                        </div>
                    : <span/>;
        

        return (
            <div>

                <POModal/>

                { this.renderHeaderTitles()  }   

                <div id="content" className="item-single">
                    <div className="container" >
                        <div className="row justify-content-md-center" >

                            <div className="col-md-7 col-lg-7" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px'}}>

                                <div className="theiaStickySidebar" style={{paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none' }}>
                                    <div>
                                        <div className="item-gallery">
                                            <div className="swiper-container gallery-top swiper-container-horizontal">
                                            <div className="swiper-wrapper lazyload">
                                            
                                                <div className="swiper-slide swiper-slide-active" style={{width: '603px', marginRight: '10px'}}>
                                                    <img style={{height: 350}} src={this.props.selectedItem.get('imgUrl')} className="img-fluid swiper-lazy swiper-lazy-loaded" alt="Drawing Room"/> 
                                                </div>
                                                
                                            </div>
                                                
                                                { descriptions }

                                                { bullets }

                                                <div>
        
                                                    <RenderTitle key={"partId"} title={'Part Id'} id={item.get('partId')} />
                                                    <RenderTitle key={"pkgType"} title={'Package Type'} id={item.get('pkgType')} />
                                                    <RenderTitle key={"per_pkg"} title={'Per Package'} id={item.get('per_pkg')} />
                                                    <RenderTitle key={"sku"} title={'Sku'} id={item.get('sku')} />
                                                    <RenderTitle key={"modelNo"} title={'Model No'} id={item.get('modelNo')} />
                                                    <RenderTitle key={"manufacturingId"} title={'Manufacturing Id'} id={item.get('manufacturingId')} />
                                                    <RenderTitle key={"manufacturingPartNo"} title={'Manufacturing Part No'} id={item.get('manufacturingPartNo')} /> 

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                            
                                </div>
                            </div>

                                                    
                            <div className="col-md-5 col-lg-5" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px'}}>
                            <div className="theiaStickySidebar" style={{paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none', top: '0px', left: '889.328px'}}>
                                <div id="sidebar" className="sidebar-right">
                                    <div className="sidebar_inner">
                                        <div id="feature-list" role="tablist">
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingOne">
                                                    <h4 className="panel-title">Available from Vendors</h4>
                                                </div>
                                                <div id="specification" className="panel-collapse collapse show" role="tabpanel">
                                                    <div className="card-body">
                                                        <table className="table v1">
                                                        <tbody>
                                                            <tr>
                                                                <td>Vendor</td>
                                                                <td>Available</td>
                                                                <td>QTY</td>     
                                                                <td>Price</td>                                                                                                                                
                                                            </tr>

                                                            { this.renderItemsFromVendors() }

                                                        </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                                             
                                    </div>
                                </div>
                               
                            </div>
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
        selectedItem: state.shop.get('selectedItem')
    };
}

Details = connect(mapStateToProps)(Details);


const DetailsMain = <Route key="details" path=":item_id" component={Details} />

export { DetailsMain };