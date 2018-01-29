import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { IndexRoute, Route } from 'react-router';

class Home extends Component {

    constructor() {
        super();
    }

    shopNow() {
        /// your content is into a variable named 'content'
        // var fs = require('fs');

        // try { fs.writeFileSync('myfile.txt', content, 'utf-8'); }
        // catch(e) { alert('Failed to save the file !'); }

        //window.location.hash = "shop"
    }

    render() {
        return (
            <div>
                <div className="home-search">
                    <div className="main search-form">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-12 col-lg-10">

                                    {/* <div className="heading">
                                        <h2>Search from thousands of products</h2>
                                        <h3>We will help you to find what you need at the lowest cost possible and fastest delivery time available</h3>
                                    </div>
                                    <form action="property_listing.html">
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-lg" placeholder="Search by sku or description " />
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <a style={{ width: "100%" }} href="javascript:void(0)" onClick={e => this.shopNow()} className="btn btn-lg btn-primary">Search</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-in">
                                        </div>
                                    </form> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COntent Section */}

                <div id="content" >

                    <div className="feature-box centered">
                        <div data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-12 col-xl-10">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="image"> <img src="/img/demo/icons/chevron.png" width="100" alt="" /> </div>
                                                    <h4>Search</h4>
                                                    <div className="caption">Search from thousands of different products by comparing prices and shipping.</div>
                                                    <div className="button"><a href="#">FIND WHAT YOU NEED</a></div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="image"> <img src="/img/demo/icons/chevron.png" width="100" alt="" /> </div>
                                                    <h4>Add</h4>
                                                    <div className="caption">Add the products that will give you the cheapest cost and quickest shipping available.</div>
                                                    <div className="button"><a href="#">MANAGE PURCHASE ORDERS EASILY</a></div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-box">
                                                    <div className="image"> <img src="/img/demo/icons/chevron.png" width="100" alt="" /> </div>
                                                    <h4>Events</h4>
                                                    <div className="caption">By using our easy to use purchasing system there is not need to manage your complicated orders with multiple vendors.</div>
                                                    <div className="button"><a href="#">ONE PURCHASE ORDER, ONE INVOICE</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="feature-box centered gray">
                        <div data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-12 col-xl-10">
                                        <div className="item-listing grid">
                                            <div className="main-title"><span>Featured Products</span></div>
                                            <div className="main-title-description">Thinking abroad? You can now dream and discover international properties</div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"><a href="property_single.html"><img src="/img/demo/property/1.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price">$420,000 <small>$777 / sq m</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-left">Sponsored</div>
                                                                <div className="item-badge-right">For Sale</div>
                                                            </div>
                                                        </a> <a href="#" className="save-item"><i className="fa fa-star"></i></a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">3 bed semi-detached house</h3>
                                                            <div className="item-location"><i className="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                                                            <div className="item-details-i"> <span className="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i className="fa fa-bed"></i></span> <span className="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i className="fa fa-bath"></i></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"><a href="property_single.html"><img src="/img/demo/property/2.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price">$420,000 <small>$777 / sq m</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-left">Sponsored</div>
                                                                <div className="item-badge-right">For Sale</div>
                                                            </div>
                                                        </a> <a href="#" className="save-item"><i className="fa fa-star"></i></a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">3 bed semi-detached house</h3>
                                                            <div className="item-location"><i className="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                                                            <div className="item-details-i"> <span className="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i className="fa fa-bed"></i></span> <span className="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i className="fa fa-bath"></i></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"><a href="property_single.html"><img src="/img/demo/property/3.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price">$420,000 <small>$777 / sq m</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-left">Sponsored</div>
                                                                <div className="item-badge-right">For Sale</div>
                                                            </div>
                                                        </a> <a href="#" className="save-item"><i className="fa fa-star"></i></a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">3 bed semi-detached house</h3>
                                                            <div className="item-location"><i className="fa fa-map-marker"></i> Kirkstone Road, Middlesbrough TS3</div>
                                                            <div className="item-details-i"> <span className="bedrooms" data-toggle="tooltip" title="3 Bedrooms">3 <i className="fa fa-bed"></i></span> <span className="bathrooms" data-toggle="tooltip" title="2 Bathrooms">2 <i className="fa fa-bath"></i></span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="feature-box centered">
                        <div data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-12 col-xl-10">
                                        <div className="main-title"><span>What our clients say</span></div>
                                        <div className="swiper-container testimonials">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="item content-box centered">
                                                        <div className="image"> <img className="rounded-circle" src="/img/demo/profile.jpg" width="180" alt="" /> </div>
                                                        <h4>Thank you for your quick and clear responses. They are much appreciated. This was a site that needed to go up fast and it has – customizations and all!</h4>
                                                        <div className="caption">The Brown Family</div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item content-box centered">
                                                        <div className="image"> <img className="rounded-circle" src="/img/demo/profile2.jpg" width="180" alt="" />
                                                            <h4>Thank you for your quick and clear responses. They are much appreciated. This was a site that needed to go up fast and it has – customizations and all!</h4>
                                                            <div className="caption">The Brown Family</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item content-box centered">
                                                        <div className="image"> <img className="rounded-circle" src="/img/demo/profile3.jpg" width="180" alt="" />
                                                            <h4>Thank you for your quick and clear responses. They are much appreciated. This was a site that needed to go up fast and it has – customizations and all!</h4>
                                                            <div className="caption">The Brown Family</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="swiper-button-next"></div>
                                            <div className="swiper-button-prev"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-box gray centered">
                        <div data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-12 col-xl-10">
                                        <div className="main-title"><span>News &amp; Updates </span></div>
                                        <div className="main-title-description">Stay up to date with the latest happenings.</div>
                                        <div className="item-listing grid mb50">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"> <a href="blog_single.html"><img src="/img/demo/property/1.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price"><small>26th Oct 17</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-right">Legal</div>
                                                            </div>
                                                        </a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">Allianz invests 100m in Hines European Value Fund</h3>
                                                            <div className="item-comments-count"><i className="fa fa-comment-o"></i> 3</div>
                                                            <div className="item-author">By John Doe</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"> <a href="blog_single.html"><img src="/img/demo/property/1.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price"><small>26th Oct 17</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-right">Development</div>
                                                            </div>
                                                        </a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">Skanska signs 43.2m construction deal in Sollentuna</h3>
                                                            <div className="item-comments-count"><i className="fa fa-comment-o"></i> 3</div>
                                                            <div className="item-author">By John Doe</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-image"> <a href="blog_single.html"><img src="/img/demo/property/1.jpg" className="img-fluid" alt="" />
                                                            <div className="item-meta">
                                                                <div className="item-price"><small>26th Oct 17</small> </div>
                                                            </div>
                                                            <div className="item-badges">
                                                                <div className="item-badge-right category">Finance</div>
                                                            </div>
                                                        </a> </div>
                                                        <div className="item-info">
                                                            <h3 className="item-title">Baltic Horizon Fund plans next public offering of new units</h3>
                                                            <div className="item-comments-count"><i className="fa fa-comment-o"></i> 3</div>
                                                            <div className="item-author">By John Doe</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center"><a href="#" className="btn btn-xlg btn-link">View All</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-box centered pb0">
                        <div data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col col-lg-10 col-xl-10">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="text-center mt50 mb50">
                                                    <div className="main-title"><span>Connect with us from anywhere</span></div>
                                                    <div className="main-title-description">Download the mobile app and enjoy the smoothest experience</div>
                                                    <img src="/img/store/apple.svg" width="120" alt="" /> <img src="/img/store/google.svg" width="120" alt="" /> </div>
                                            </div>
                                            <div className="col-md-6"> <img src="/img/demo/mobile-app-hero.png" className="img-fluid" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

const HomeIndex = <IndexRoute key="index" component={Home} />
const HomeMain = <Route key="home" path="home" component={Home} />

export { HomeIndex, HomeMain };