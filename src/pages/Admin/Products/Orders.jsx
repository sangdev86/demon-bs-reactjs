import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Orders extends Component {
    render() {
        let { products } = this.props
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-border custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Order Id</th>
                                        <th>Order Date</th>
                                        <th>Customer</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="product-det">
                                                        <img src={product.img} />
                                                        <div className="product-desc">
                                                            <h2><a href="#">{product.title}</a>
                                                                <span>Lorem ipsum dolor sit</span></h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><a href="#">{`#ORD-000${product.id}`}</a></td>
                                                <td>{product.createDate}</td>
                                                <td>John Smith</td>
                                                <td>{product.quantity}</td>
                                                <td>
                                                    <p className="price-sup"><sup>$</sup>{product.price}</p>
                                                </td>
                                                <td>{product.status == 1 ? <span className="badge badge-success-border">Delivered</span> : product.status == 2 ? <span className="badge badge-danger-border">Cancelled</span> : <span className="badge badge-info-border">Shipped</span>}</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <Link className="dropdown-item" to="/admin/edit-product"><i className="fas fa-pen m-r-5" /> Edit</Link>
                                                            <a className="dropdown-item" href="#"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
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
export default connect(mapStateToProps)(Orders);