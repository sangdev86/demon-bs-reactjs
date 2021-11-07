import React, { Component } from 'react'
import ShowModal  from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';

export default class LeaveType extends Component {
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
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-8 col-5">
                        <h4 className="page-title">Leave Type</h4>
                    </div>
                    <div className="col-sm-4 col-7 text-right m-b-30">
                        <a data-name="Add Leave Type" href="#" className="btn btn-primary btn-rounded float-right" onClick={this.showModal} data-toggle="modal" data-target="#add_leavetype"><i className="fa fa-plus" /> Add Leave Type</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Leave Type</th>
                                        <th>Leave Days</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>12 Days</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-success" /> Active
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item"><i className="far fa-dot-circle text-success" /> Active</a>
                                                    <a href="#" className="dropdown-item"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" data-name="Edit Leave Type" onClick={this.showModal} href="#" title="Edit" data-toggle="modal" data-target="#edit_leavetype"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                    <a className="dropdown-item" data-name="Delete Leave Type" onClick={this.showModal} href="#" title="Delete" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>Medical Leave</td>
                                        <td>12 Days</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-danger" /> Inactive
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" data-name="Edit Leave Type" onClick={this.showModal} href="#" title="Edit" data-toggle="modal" data-target="#edit_leavetype"><i className="fas fa-pen m-r-5" />Edit</a>
                                                    <a className="dropdown-item" data-name="Delete Leave Type" onClick={this.showModal} href="#" title="Delete" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            3
                                        </td>
                                        <td>Loss of Pay</td>
                                        <td>-</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-success" /> Active
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" data-name="Edit Leave Type" onClick={this.showModal} href="#" title="Edit" data-toggle="modal" data-target="#edit_leavetype"><i className="fas fa-pen m-r-5" />Edit</a>
                                                    <a className="dropdown-item" data-name="Delete Leave Type" onClick={this.showModal} href="#" title="Delete" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
