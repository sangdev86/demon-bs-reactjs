import React, { Component } from 'react';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';

class Estimates extends Component {
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
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    render() {
        let { listUser } = this.props;
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees act="Estimates" showModal={this.showModal}/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th>Estimate Number</th>
                                        <th>Client</th>
                                        <th>Estimate Date</th>
                                        <th>Expiry Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><Link to="/admin/estimate-view">{`EST-000${user.uid}`}</Link></td>
                                                <td> {user.uName} </td>
                                                <td>{user.dateFrom}</td>
                                                <td> {user.dateTo} </td>
                                                <td>{`$${user.salary}`}</td>
                                                <td>{user.status == 'Expired' ?
                                                    <span className="badge badge-warning-border">Expired</span> 
                                                    : user.status == 'Sent' ?
                                                    <span className="badge badge-info-border">Sent</span>
                                                        : user.status == 'Declined' ?
                                                    <span className="badge badge-danger-border">Declined</span>
                                                    :
                                                    <span className="badge badge-success-border">Accepted</span>
                                                }</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name='Edit Estimate' onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit-estimate"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Estimate" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(Estimates);