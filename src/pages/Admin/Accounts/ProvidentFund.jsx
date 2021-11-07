import React, { Component } from 'react';
import HeaderEmployees from '../Components/HeaderEmployees';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class ProvidentFund extends Component {
    componentDidMount() {
        if ($('.datatable').length > 0) {
            $('.datatable').DataTable({
                "bFilter": false,
            });
        };
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        };
        if ($('.table-responsive label select').length) {
            $('.table-responsive label select').addClass('custom-select custom-select-sm form-control form-control-sm')
        }

    }
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
                    <div className="col-sm-5 col-4">
                        <h4 className="page-title">Provident Fund</h4>
                    </div>
                    <div className="col-sm-7 col-8 text-right m-b-30">
                        <a href="#" data-name='Add Provident Fund' onClick={this.showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_pf"><i className="fa fa-plus" /> Add Provident Fund</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable m-b-0">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Provident Fund Type</th>
                                        <th>Employee Share</th>
                                        <th>Organization Share</th>
                                        <th>Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/admin/profile" className="avatar">J</Link>
                                            <h2><Link to="/admin/profile">John Doe <span> Web Designer</span></Link></h2>
                                        </td>
                                        <td>Percentage of Basic Salary</td>
                                        <td>2%</td>
                                        <td>2%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="far fa-dot-circle text-danger" /> Pending
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Pending</a>
                                                    <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Approved</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="dropdown dropdown-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" data-name='Edit Provident Fund' onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_pf" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                    <a className="dropdown-item" data-name='Delete Provident Fund' onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete" title="Delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
