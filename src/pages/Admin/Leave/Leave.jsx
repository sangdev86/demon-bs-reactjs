import React, { Component } from 'react';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal.js';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Leave extends Component {
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
        let {listUser} = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Leave" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Leave Type</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>No of Days</th>
                                        <th>Reason</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Link to="/admin/profile" className="avatar">{user.uName.slice(0, 1)}</Link>
                                                    <h2><Link to="/admin/profile">{user.uName}<span>{user.designation}</span></Link></h2>
                                                </td>
                                                <td>{user.leaveType}</td>
                                                <td>{user.dateFrom}</td>
                                                <td>{user.dateTo}</td>
                                                <td>{user.noOfDays}</td>
                                                <td>{user.reason}</td>
                                                <td className="text-center">
                                                    <div className="dropdown action-label">
                                                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                            <i className="far fa-dot-circle text-purple" /> New 
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-purple" /> New</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-info" /> Pending</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Approved</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Declined</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit Leave" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Leave" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(Leave);