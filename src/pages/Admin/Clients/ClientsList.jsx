import React, { Component } from 'react';
import HeaderEmployees from '../Components/HeaderEmployees';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class ClientsList extends Component {
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
        let { listUser } = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Clients" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}>Name</th>
                                        <th>Client ID</th>
                                        <th>Contact Peson</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Link to="/admin/profile" className="avatar">J</Link>
                                                    <h2><Link to="/admin/profile">{user.uName}<span>{user.designation}</span></Link></h2>
                                                </td>
                                                <td>{`FT-000${user.uid}`}</td>
                                                <td>{user.contactPeson}</td>
                                                <td><a href="#" className="__cf_email__" data-cfemail="79131611171d161c391c01181409151c571a1614">[email&nbsp;protected]</a>
                                                </td>
                                                <td>{user.numberPhone}</td>
                                                <td>
                                                    <div className="dropdown action-label">
                                                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-success" /> Active </a>
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
                                                            <a data-name="Edit Client" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Client" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
        listUser: state.userReducer.listUser,
    }
}
export default connect(mapStateToProps)(ClientsList);