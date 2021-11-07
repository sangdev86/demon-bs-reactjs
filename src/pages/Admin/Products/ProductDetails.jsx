import React, { Component } from 'react'
import { connect } from 'react-redux';
import $ from 'jquery';
class ProductDetails extends Component {
    componentDidMount(){
        if ($('.proimage-thumb li a').length > 0) {
            var full_image = $(this).attr("href");
            $(".proimage-thumb li a").click(function () {
                full_image = $(this).attr("href");
                $(".pro-image img").attr("src", full_image);
                return false;
            });
        }
    }
    render() {
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Product Details</h4>
                    </div>
                </div>
                <div className="card-box">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="product-view">
                                <div className="proimage-wrap">
                                    <div className="pro-image" id="pro_popup">
                                        <a href="../assets/img/product/product-01.jpg">
                                            <img className="img-fluid" src="../assets/img/product/product-01.jpg" />
                                        </a>
                                    </div>
                                    <ul className="proimage-thumb">
                                        <li>
                                            <a href="../assets/img/product/product-01.jpg"><img src="../assets/img/product/product-thumb-01.jpg" /></a>
                                        </li>
                                        <li>
                                            <a href="../assets/img/product/product-02.jpg"><img src="../assets/img/product/product-thumb-02.jpg" /></a>
                                        </li>
                                        <li>
                                            <a href="../assets/img/product/product-03.jpg"><img src="../assets/img/product/product-thumb-03.jpg" /></a>
                                        </li>
                                        <li>
                                            <a href="../assets/img/product/product-04.jpg"><img src="../assets/img/product/product-thumb-04.jpg" /></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="product-info">
                                <h2>Apple Macbook Air MQD42HN/A 13-inch Laptop</h2>
                                <p>Product ID: PRO-0001</p>
                                <div className="rating">
                                    <p>
                                        <span><i className="fa fa-star rated" /></span>
                                        <span><i className="fa fa-star rated" /></span>
                                        <span><i className="fa fa-star rated" /></span>
                                        <span><i className="fa fa-star rated" /></span>
                                        <span><i className="far fa-star " /></span>
                                        <span>/ Reviews (3)</span>
                                    </p>
                                </div>
                                <p className="product_price">$1918</p>
                                <p><b>Availability:</b> In Stock</p>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg">
                                        <i className="fa fa-shopping-cart" /> Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item"><a className="nav-link active" href="#product_desc" data-toggle="tab">Description</a></li>
                                <li className="nav-item"><a className="nav-link" href="#product_reviews" data-toggle="tab">Reviews</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="product_desc">
                                    <div className="product-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                                            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                            voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
                                            eum fugiat quo voluptas nulla pariatur?</p>
                                        <blockquote className="blockquote">
                                            <p className="mb-0">Vestibulum id ligula porta felis euismod semper. Sed posuere
                                                consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                                                lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus,
                                                nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
                                                ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
                                                felis euismod semper.</p>
                                        </blockquote>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                            in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                                            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                            id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                                            dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                                            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                                            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                                            perferendis doloribus asperiores repellat.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="product_reviews">
                                    <div className="product-reviews">
                                        <h3>Reviews (3)</h3>
                                        <ul className="review-list">
                                            <li>
                                                <div className="review">
                                                    <div className="review-author">
                                                        <img className="avatar" src="../assets/img/user.jpg" />
                                                    </div>
                                                    <div className="review-block">
                                                        <div className="review-by">
                                                            <span className="review-author-name">Diana Bailey</span>
                                                            <div className="rating">
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                            viverra euismod odio, gravida pellentesque urna varius
                                                            vitae, gravida pellentesque urna varius vitae. Lorem ipsum
                                                            dolor sit amet, consectetur adipiscing elit. Nam viverra
                                                            euismod odio, gravida pellentesque urna varius vitae. Sed
                                                            dui lorem, adipiscing in adipiscing et, interdum nec metus.
                                                            Mauris ultricies, justo eu convallis placerat, felis enim
                                                            ornare nisi, vitae mattis nulla ante id dui.</p>
                                                        <span className="review-date">December 6, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="review">
                                                    <div className="review-author">
                                                        <img className="avatar"  src="../assets/img/user.jpg" />
                                                    </div>
                                                    <div className="review-block">
                                                        <div className="review-by">
                                                            <span className="review-author-name">Marie Wells</span>
                                                            <div className="rating">
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        <span className="review-date">December 11, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="review">
                                                    <div className="review-author">
                                                        <img className="avatar" src="../assets/img/user.jpg" />
                                                    </div>
                                                    <div className="review-block">
                                                        <div className="review-by">
                                                            <span className="review-author-name">Pamela Curtis</span>
                                                            <div className="rating">
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="fa fa-star rated" />
                                                                <i className="far fa-star" />
                                                                <i className="far fa-star" />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        <span className="review-date">December 13, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="all-reviews">
                                            <button type="button" className="btn btn-primary">View All Reviews</button>
                                        </div>
                                    </div>
                                    <div className="product-write-review">
                                        <h3>Write Review</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label>Name <span className="text-red">*</span></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Your email address <span className="text-red">*</span></label>
                                                        <input type="email" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Rating <span className="text-red">*</span></label>
                                                        <div className="rating">
                                                            <i className="fa fa-star rated" />
                                                            <i className="fa fa-star rated" />
                                                            <i className="fa fa-star rated" />
                                                            <i className="fa fa-star rated" />
                                                            <i className="far fa-star" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Review Comments</label>
                                                        <textarea rows={4} className="form-control" defaultValue={""} />
                                                    </div>
                                                    <div className="review-submit">
                                                        <button type="submit" className="btn" >Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
let mapStateToProps = (state) => {
    return {
        products: state.infomations.products,
    }
}
export default connect(mapStateToProps)(ProductDetails);