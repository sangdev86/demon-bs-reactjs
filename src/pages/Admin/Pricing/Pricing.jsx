import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';

export default class Pricing extends Component {
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
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-8 col-4">
                        <h4 className="page-title">Pricing</h4>
                    </div>
                    <div className="col-sm-4 col-8 text-right m-b-30">
                        <a href="#" data-name='Add Pricing' onClick={this.showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add-pricing">
                            <i className="fa fa-plus" /> Add Pricing</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="pricing-box">
                            <h3 className="pricing-title">Free Trial</h3>
                            <h1 className="pricing-rate"><sup>$</sup>00</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                            <ul>
                                <li><i className="fa fa-check" aria-hidden="true" /> <b>10 Users</b></li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Add Reviews</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> 24/7 Customer Support</li>
                                <li>&nbsp;</li>
                            </ul>
                            <a href="#" data-name='Edit Pricing' onClick={this.showModal} className="btn btn-primary btn-rounded w-md" data-toggle="modal" data-target="#edit-pricing">Edit</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="pricing-box">
                            <h3 className="pricing-title">Standard</h3>
                            <h1 className="pricing-rate"><sup>$</sup>21</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                            <ul>
                                <li><i className="fa fa-check" aria-hidden="true" /> <b>30 Users</b></li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Add Reviews</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Chatting</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> 24/7 Customer Support</li>
                            </ul>
                            <a href="#" data-name='Edit Pricing' onClick={this.showModal} className="btn btn-primary btn-rounded w-md" data-toggle="modal" data-target="#edit-pricing">Edit</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="pricing-box">
                            <h3 className="pricing-title">Business</h3>
                            <h1 className="pricing-rate"><sup>$</sup>38</h1>
                            <p>Lorem ipsum dolor sit amet</p>
                            <ul>
                                <li><i className="fa fa-check" aria-hidden="true" /> <b>100 Users</b></li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Add Reviews</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Chatting</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> 24/7 Customer Support</li>
                            </ul>
                            <a href="#" data-name='Edit Pricing' onClick={this.showModal} className="btn btn-primary btn-rounded w-md" data-toggle="modal" data-target="#edit-pricing">Edit</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                        <div className="pricing-box add-pricing">
                            <div className="display-table">
                                <div className="table-cell">
                                    <a href="#" data-name='Add Pricing' onClick={this.showModal} className="btn add-price-btn btn-rounded" data-toggle="modal" data-target="#add-pricing"><i className="fa fa-plus" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
