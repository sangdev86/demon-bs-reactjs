import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import HeaderEmployees from '../Components/HeaderEmployees';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    render() {
        let { products } = this.props
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees act="Products" showModal={this.showModal} size='lg' />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-border custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Product Id</th>
                                        <th>Created Date</th>
                                        <th>Quantity</th>
                                        <th>Orders</th>
                                        <th>Reviews</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((product,index)=>{
                                        return(
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
                                                <td><a href="#">{`#PRO-000${product.id}`}</a></td>
                                                <td>{product.createDate}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.orders}</td>
                                                <td>{product.orders}</td>
                                                <td>
                                                    <p className="price-sup"><sup>$</sup>{product.price}</p>
                                                </td>
                                                <td>{product.status == 1 ? <span className="badge badge-success-border">In Stock</span> : product.status == 2 ? <span className="badge badge-danger-border">Out of Stock</span> : <span className="badge badge-warning-border">Low Stock</span>}</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit Product" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit-product"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Product" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(ProductsList);