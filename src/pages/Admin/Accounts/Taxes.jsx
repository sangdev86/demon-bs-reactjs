import React, { Component } from 'react'
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';

export default class Taxes extends Component {
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
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-8 col-6">
                        <h4 className="page-title">Taxes</h4>
                    </div>
                    <div className="col-sm-4 col-6 text-right m-b-30">
                        <a href="#" data-name='Add Tax' onClick={this.showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_tax"><i className="fa fa-plus" /> Add Tax</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tax Name </th>
                                        <th>Tax Percentage (%) </th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>VAT</td>
                                        <td>14%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-danger" /> Inactive
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#" data-name='Edit Tax' onClick={this.showModal} data-toggle="modal" data-target="#edit_tax" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                    <a className="dropdown-item" href="#" data-name='Delete Tax' onClick={this.showModal} data-toggle="modal" data-target="#delete_tax" title="Delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>GST</td>
                                        <td>30%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-success" /> Active
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" data-name='Edit Tax' onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_tax" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                    <a className="dropdown-item" data-name='Delete Tax' onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete" title="Delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
