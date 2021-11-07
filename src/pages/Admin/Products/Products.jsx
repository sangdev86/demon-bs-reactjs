import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderEmployees from '../Components/HeaderEmployees';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';

class Products extends Component {
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
        let {products} = this.props
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees act="Products" showModal={this.showModal} size='lg' />
                <div className="row">
                    {products && products.map((product,index)=>{
                        return(
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product">
                                    <div className="product-inner">
                                        <img alt="alt" src={product.img} />
                                        <div className="cart-btns">
                                            <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                                            <a data-name='Edit Product' onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit-product" className="btn btn-info proedit-btn">Edit</a>
                                        </div>
                                    </div>
                                    <div className="pro-desc">
                                        <h5><Link to="/admin/product-details">{product.title}</Link></h5>
                                        <div className="price"><sup>$</sup>{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
export default connect(mapStateToProps)(Products);