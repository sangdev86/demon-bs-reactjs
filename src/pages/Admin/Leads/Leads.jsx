import React, { Component } from 'react'
import ShowModal from '../../../classes/ShowModal'
import CustomModal from '../Components/CustomModal'
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
class Leads extends Component {
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
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Leads</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                    <tr>
                                        <th>Lead Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Project</th>
                                        <th>Assigned Staff</th>
                                        <th>Status</th>
                                        <th>Created</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><Link to="/admin/profile">Lesley Grauer</Link></td>
                                                <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection"
                                                    className="__cf_email__"
                                                    data-cfemail="bfd3daccd3dac6d8cddecadacdffdac7ded2cfd3da91dcd0d2">[email&#160;protected]</a>
                                                </td>
                                                <td>9876543210</td>
                                                <td><Link to="/admin/project-view">Video Calling App</Link></td>
                                                <td>
                                                    <ul className="team-members">
                                                        <OverlayTrigger
                                                            placement="top"
                                                            overlay={
                                                                <Tooltip id="button-tooltip">
                                                                    John Doe
                                                                </Tooltip>
                                                            }>
                                                            <li style={{cursor:'pointer'}}>
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
                                                <td><span className="badge badge-success-border">Working</span></td>
                                                <td>5 Dec 2017</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a className="dropdown-item" href="#"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(Leads);