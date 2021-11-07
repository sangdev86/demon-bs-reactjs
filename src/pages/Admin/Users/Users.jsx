import React, { Component } from 'react';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
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
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    render() {
        let {listUser} =this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="User" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th style={{width:'30%'}}>Name</th>
                                        <th>Email</th>
                                        <th>Company</th>
                                        <th>Created Date</th>
                                        <th>Role</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Link to="/admin/profile" className="avatar">{user.uName.slice(0, 1)}</Link>
                                                    <h2><Link to="/admin/profile">{user.uName}<span>{user.designation}</span></Link></h2>
                                                </td>
                                                <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection"
                                                    class="__cf_email__"
                                                    data-cfemail="adcfccdfdfd4ced8c9ccedc8d5ccc0ddc1c883cec2c0">[email&#160;protected]</a>
                                                </td>
                                                <td>{user.companyName}</td>
                                                <td>{user.createDay}</td>
                                                <td>
                                                    {user.roleId === 1 ? <span class="badge badge-info-border">Client</span> : user.roleId === 2 ? <span class="badge badge-success-border">Employee</span> : <span class="badge badge-danger-border">Admin</span>}
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit User" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete User" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(Users);