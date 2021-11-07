import React, { Component } from 'react'
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import HeaderEmployees from '../Components/HeaderEmployees';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
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
        let { listUser } = this.props;
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Projects" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Project Id</th>
                                        <th>Leader</th>
                                        <th style={{ width: 130 }}>Team</th>
                                        <th>Deadline</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><h2><Link to="/admin/profile-view">Office Management</Link></h2></td>
                                                <td>{`PRO-000${user.uid}`}</td>
                                                <td><ul className="team-members">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip id="button-tooltip">
                                                                John Doe
                                                            </Tooltip>
                                                        }>
                                                        <li style={{ cursor: 'pointer' }}>
                                                            <a to="#"><img src="../assets/img/user.jpg" /></a>
                                                        </li>
                                                    </OverlayTrigger>
                                                </ul></td>
                                                <td>
                                                    <ul className="team-members">
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={
                                                                <Tooltip id="button-tooltip">
                                                                    John Smith
                                                                </Tooltip>
                                                            }>
                                                            <li style={{ cursor: 'pointer' }}>
                                                                <a to="#"><img src="../assets/img/user.jpg" /></a>
                                                            </li>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={
                                                                <Tooltip id="button-tooltip">
                                                                    Mike Litous
                                                                </Tooltip>
                                                            }>
                                                            <li style={{ cursor: 'pointer' }}>
                                                                <a to="#"><img src="../assets/img/user.jpg" /></a>
                                                            </li>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={
                                                                <Tooltip id="button-tooltip">
                                                                    Richard Miles
                                                                </Tooltip>
                                                            }>
                                                            <li style={{ cursor: 'pointer' }}>
                                                                <a to="#"><img src="../assets/img/user.jpg" /></a>
                                                            </li>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={
                                                                <Tooltip id="button-tooltip">
                                                                    Richard Miles
                                                                </Tooltip>
                                                            }>
                                                            <li>
                                                                <a href="#"><img src="../assets/img/user.jpg" /></a>
                                                            </li>
                                                        </OverlayTrigger>
                                                        <li>
                                                            <a href="#" className="all-users">+15</a>
                                                        </li>
                                                    </ul>

                                                </td>
                                                <td>5 Dec 2017</td>
                                                <td>
                                                    <div className="dropdown action-label">
                                                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-danger" /> High </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> High</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-warning" /> Medium</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Low</a>
                                                        </div>
                                                    </div>
                                                </td>
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
                                                            <a className="dropdown-item" data-name="Edit Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_project"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                            <a className="dropdown-item" data-name="Delete Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(ProjectList);
