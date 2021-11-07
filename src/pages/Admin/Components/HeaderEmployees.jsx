import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import $ from 'jquery';
export default class HeaderEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                employeeId: '',
                employeeName: ''
            },
            error: {
                employeeId: '',
                employeeName: ''
            },
            valid: false,
            date: null,
            to: null,
            from: null,
        }
    }
    componentDidMount() {
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        };
        if ($('.select').length > 0) {
            $('.select').select2({
                minimumResultsForSearch: -1,
                width: '100%'
            });
        }
    }
    getDate = (date) => {
        this.setState({
            date
        })
    }
    renderHeader = () => {
        let { showModal, act } = this.props;
        switch (act) {
            case 'Employees':
                return (
                    <>
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Employee</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <a href="#" data-name='Add Employee' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_employee"><i className="fa fa-plus" /> Add Employee</a>
                                <div className="view-icons">
                                    <NavLink activeClassName="active" to="/admin/employees" className="grid-view btn btn-link "><i className="fa fa-th" /></NavLink>
                                    <NavLink activeClassName="active" to="/admin/employees-list" className="list-view btn btn-link"><i className="fa fa-bars" /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus ">
                                    <label className="focus-label">Employee ID</label>
                                    <input name="employeeId" type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Employee Name</label>
                                    <input name="employeeName" type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Designation</label>
                                    <select className="select floating">
                                        <option>Select Designation</option>
                                        <option>Web Developer</option>
                                        <option>Web Designer</option>
                                        <option>Android Developer</option>
                                        <option>Ios Developer</option>
                                    </select>
                                </div>

                            </div>
                            <div className="col-sm-6 col-md-3 search--fix">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </>
                )
            case 'Leave':
                return (
                    <>
                        <div className="row">
                            <div className="col-sm-8 col-6">
                                <h4 className="page-title">Leave Request</h4>
                            </div>
                            <div className="col-sm-4 col-6 text-right m-b-30">
                                <a href="#" data-name='Add Leave Request' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_leave"><i className="fa fa-plus" /> Add Leave</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Employee Name</label>
                                    <input type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Leave Type</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option>Casual Leave</option>
                                        <option>Medical Leave</option>
                                        <option>Loss of Pay</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Leave Status</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option> Pending </option>
                                        <option> Approved </option>
                                        <option> Rejected </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </>

                )
            case 'User':
                return (
                    <>
                        <div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <h4 className="page-title">Users</h4>
                                </div>
                                <div className="col-sm-8 col-8 text-right m-b-30">
                                    <a href="#" data-name='Add User' onClick={showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_user"><i className="fa fa-plus" /> Add User</a>
                                </div>
                            </div>
                            <div className="row filter-row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Name</label>
                                        <input type="text" className="form-control floating" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus select-focus">
                                        <label className="focus-label">Company</label>
                                        <select className="select floating">
                                            <option>Select Company</option>
                                            <option>Global Technologies</option>
                                            <option>Delta Infotech</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus select-focus">
                                        <label className="focus-label">Role</label>
                                        <select className="select floating">
                                            <option>Select Roll</option>
                                            <option>Web Developer</option>
                                            <option>Web Designer</option>
                                            <option>Android Developer</option>
                                            <option>Ios Developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <a href="#" className="btn btn-success btn-block"> Search </a>
                                </div>
                            </div>
                        </div>

                    </>
                )
            case 'Attendance':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-12">
                                <h4 className="page-title">Attendance Sheet</h4>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Employee Name</label>
                                    <input type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Select Month</label>
                                    <select className="select floating">
                                        <option>-</option>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Select Year</label>
                                    <select className="select floating">
                                        <option>-</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>
                )
            case 'Clients':
                return (
                    <>
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Clients</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <a href="#" data-name='Add Client' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_client"><i className="fa fa-plus" /> Add Client</a>
                                <div className="view-icons">
                                    <NavLink activeClassName="active" to="/admin/clients" className="grid-view btn btn-link "><i className="fa fa-th" /></NavLink>
                                    <NavLink activeClassName="active" to="/admin/clients-list" className="list-view btn btn-link"><i className="fa fa-bars" /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus ">
                                    <label className="focus-label">Client ID</label>
                                    <input name="employeeId" type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Client Name</label>
                                    <input name="employeeName" type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Company</label>
                                    <select className="select floating">
                                        <option>Select Company</option>
                                        <option>Global Technologies</option>
                                        <option>Delta Infotech</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 search--fix">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </>
                )
            case 'Salary':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-4 col-5">
                                <h4 className="page-title">Employee Salary</h4>
                            </div>
                            <div className="col-sm-8 col-7 text-right m-b-30">
                                <a href="#" data-name='Add Staff Salary' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_salary"><i className="fa fa-plus" /> Add Salary</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Employee Name</label>
                                    <input type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Role</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option>Employee</option>
                                        <option>Manager</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Leave Status</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option> Pending </option>
                                        <option> Approved </option>
                                        <option> Rejected </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>

                )
            case 'Estimates':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-5 col-4">
                                <h4 className="page-title">Estimates</h4>
                            </div>
                            <div className="col-sm-7 col-8 text-right m-b-30">
                                <a href="#" data-name='Create New Estimate' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#create-estimate"><i className="fa fa-plus" /> Create New Estimate</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Status</label>
                                    <select className="select floating">
                                        <option>Select Status</option>
                                        <option>Accepted</option>
                                        <option>Declined</option>
                                        <option>Expired</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>
                )
            case 'Invoices':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-5 col-4">
                                <h4 className="page-title">Invoices</h4>
                            </div>
                            <div className="col-sm-7 col-8 text-right m-b-30">
                                <a href="#" data-name='Create New Invoices' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#create-invoice">
                                    <i className="fa fa-plus" /> Create New Invoices</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Status</label>
                                    <select className="select floating">
                                        <option>Select Status</option>
                                        <option>Accepted</option>
                                        <option>Declined</option>
                                        <option>Expired</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>
                )
            case 'Expenses':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-8 col-5">
                                <h4 className="page-title">Expenses</h4>
                            </div>
                            <div className="col-sm-4 col-7 text-right m-b-30">
                                <a href="#" data-name="Add Expense" onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_expense"><i className="fa fa-plus" /> Add Expense</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Item Name</label>
                                    <input type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Purchased By</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option>Loren Gatlin</option>
                                        <option>Tarah Shropshire</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Paid By</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option> Cash </option>
                                        <option> Cheque </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>
                )
            case 'Products':
                return (
                    <div className="row">
                        <div className="col-sm-4 col-4">
                            <h4 className="page-title">Products</h4>
                        </div>
                        <div className="col-sm-8 col-8 text-right m-b-20">
                            <a href="#" data-name='Add Product' onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add-product">
                                <i className="fa fa-plus" /> Add Product</a>
                            <div className="view-icons">
                                <NavLink activeClassName="active" to="/admin/products" className="grid-view btn btn-link"><i className="fa fa-th" /></NavLink>
                                <NavLink activeClassName="active" to="/admin/products-list" className="list-view btn btn-link"><i className="fa fa-bars" /></NavLink>
                            </div>
                        </div>
                    </div>

                )
            case 'Tickets':
                return (
                    <div>
                        <div className="row">
                            <div className="col-sm-8 col-4">
                                <h4 className="page-title">Tickets</h4>
                            </div>
                            <div className="col-sm-4 col-8 text-right m-b-30">
                                <a href="#" data-name="Add New Ticket" onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#add_ticket"><i className="fa fa-plus" /> Add New Ticket</a>
                            </div>
                        </div>
                        <div className="row filter-row">
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Employee Name</label>
                                    <input type="text" className="form-control floating" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Status</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option> Pending </option>
                                        <option> Approved </option>
                                        <option> Returned </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus select-focus">
                                    <label className="focus-label">Priority</label>
                                    <select className="select floating">
                                        <option> -- Select -- </option>
                                        <option> High </option>
                                        <option> Low </option>
                                        <option> Medium </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ from: date }) }}
                                            onFocus={() => { this.setState({ from: new Date() }) }}
                                            selected={this.state.from}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={(date) => { this.setState({ to: date }) }}
                                            onFocus={() => { this.setState({ to: new Date() }) }}
                                            selected={this.state.to}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                                <a href="#" className="btn btn-success btn-block"> Search </a>
                            </div>
                        </div>
                    </div>

                )
            case 'Projects':
                return (
                        <div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <h4 className="page-title">Projects</h4>
                                </div>
                                <div className="col-sm-8 col-8 text-right m-b-30">
                                    <a href="#" data-name="Create Project" onClick={showModal} className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#create_project"><i className="fa fa-plus" /> Create Project</a>
                                    <div className="view-icons">
                                        <NavLink activeClassName="active" to="/admin/projects" className="grid-view btn btn-link"><i className="fa fa-th" /></NavLink>
                                        <NavLink activeClassName="active" to="/admin/project-list" className="list-view btn btn-link"><i className="fa fa-bars" /></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row filter-row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Project Name</label>
                                        <input type="text" className="form-control floating" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Employee Name</label>
                                        <input type="text" className="form-control floating" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus select-focus">
                                        <label className="focus-label">Designation</label>
                                        <select className="select floating">
                                            <option>Select Roll</option>
                                            <option>Web Developer</option>
                                            <option>Web Designer</option>
                                            <option>Android Developer</option>
                                            <option>Ios Developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <a href="#" className="btn btn-success btn-block"> Search </a>
                                </div>
                            </div>
                        </div>
                )
            default:
                break;
        }

    }
    render() {
        return (
            <div>
                {this.renderHeader()}
            </div>
        )
    }
}
