import React, { Component } from 'react';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';

class Expenses extends Component {
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
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees act="Expenses" showModal={this.showModal} />
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Purchase From</th>
                                        <th>Purchase Date</th>
                                        <th>Purchased By</th>
                                        <th>Amount</th>
                                        <th>Paid By</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>Dell Laptop</td>
                                                <td>Amazon</td>
                                                <td> {user.createDay} </td>
                                                <td>{user.uName}</td>
                                                <td>{`$${user.salary}`}</td>
                                                <td>Cash</td>
                                                <td className="text-center">
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
                                                            <a data-name="Edit Expense" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_expense"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Expense" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
export default connect(mapStateToProps)(Expenses);
