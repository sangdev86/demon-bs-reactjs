import React, { Component } from 'react';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Tickets extends Component {
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
                <HeaderEmployees showModal={this.showModal} act="Tickets" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                    <tr>
                                        <th>Ticket Id</th>
                                        <th>Ticket Subject</th>
                                        <th>Assigned Staff</th>
                                        <th>Created Date</th>
                                        <th>Last Reply</th>
                                        <th>Priority</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {listUser && listUser.map((user,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td><Link to="/admin/ticket-view">{`#TKT-000${user.uid}`}</Link></td>
                                                    <td>Laptop Issue</td>
                                                    <td>{user.uName}</td>
                                                    <td>5 May 2017 07:21 AM</td>
                                                    <td>5 May 2017 11.12 AM</td>
                                                    <td>
                                                        <div className="dropdown action-label">
                                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                                                data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="far fa-dot-circle text-danger"></i> High </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-danger"></i> High</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-warning"></i> Medium</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-success"></i> Low</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="dropdown action-label">
                                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                                                data-toggle="dropdown" aria-expanded="false">
                                                                <i className="far fa-dot-circle text-danger"></i> New
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-info"></i> Open</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-info"></i> Reopened</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-danger"></i> On Hold</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-success"></i> Closed</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-success"></i> In Progress</a>
                                                                <a className="dropdown-item" href="#"><i
                                                                    className="far fa-dot-circle text-danger"></i> Cancelled</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown"
                                                                aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" data-name="Edit Ticket" onClick={this.showModal} href="#" title="Edit" data-toggle="modal"
                                                                    data-target="#edit_ticket"><i className="fas fa-pen m-r-5"></i>
                                                                    Edit</a>
                                                                <a className="dropdown-item" data-name="Delete Ticket" onClick={this.showModal} href="#" title="Delete" data-toggle="modal"
                                                                    data-target="#delete"><i
                                                                        className="far fa-trash-alt m-r-5"></i> Delete</a>
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
export default connect(mapStateToProps)(Tickets);