import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ExtrasNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        }
    }
    showDropdown = (e) => {
        e.preventDefault();
        let isShow = this.state.isShow;
        e.currentTarget.className = isShow ? "subdrop" : "";
        e.currentTarget.nextElementSibling.style.display = isShow ? "block" : "none";
        this.setState({ isShow: !isShow });
    }
    render() {
        let {showModal} = this.props;
        return (
            <ul>
                <li className="menu-title">Extras</li>
                <li className="submenu" >
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-columns" aria-hidden="true" /> <span>Pages</span> <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/login"> Login </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/register"> Register </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/forgot-password"> Forgot Password </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/change-password2"> Change Password </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/lock-screen"> Lock Screen </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/profile"> Profile </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/gallery"> Gallery </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/pricing">Pricing</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/error-404">404 Error </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/error-500">500 Error </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/coming-soon">Coming Soon </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/blank-page"> Blank Page </NavLink></li>
                    </ul>
                </li>
                <li className="submenu noti-dot">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-rocket" aria-hidden="true" /> <span>CRM </span> <span className="menu-arrow" /></a>
                    <ul style={{ display: 'none' }}>
                        <li className="submenu noti-dot">
                            <a onClick={this.showDropdown} href="#"><span> Employees</span> <span className="menu-arrow" /></a>
                            <ul className="list-unstyled" style={{ display: 'none' }}>
                                <li><NavLink activeClassName="active" to="/admin/employees">All Employees</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/holidays">Holidays</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/leaves"><span>Leave Requests</span> <span className="badge badge-pill bg-primary float-right">1</span></NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/attendance">Attendance</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/departments">Departments</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/designations">Designations</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/clients">Clients</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/tasks">Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/leads">Leads</NavLink>
                        </li>
                        <li className="submenu">
                            <a onClick={this.showDropdown} href="#"><span> Accounts </span> <span className="menu-arrow" /></a>
                            <ul className="list-unstyled" style={{ display: 'none' }}>
                                <li><NavLink activeClassName="active" to="/admin/estimates">Estimates</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/invoices">Invoices</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/payments">Payments</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/expenses">Expenses</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/provident-fund">Provident Fund</NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/taxes">Taxes</NavLink></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a onClick={this.showDropdown} href="#"><span> Payroll </span> <span className="menu-arrow" /></a>
                            <ul className="list-unstyled" style={{ display: 'none' }}>
                                <li><NavLink activeClassName="active" to="/admin/salary"> Employee Salary </NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/salary-view"> Payslip </NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/worksheet">Timing Sheet</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/assets">Assets</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/activities">Activities</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/users">Users</NavLink>
                        </li>
                        <li className="submenu">
                            <a onClick={this.showDropdown} href="#"><span> Reports </span> <span className="menu-arrow" /></a>
                            <ul className="list-unstyled" style={{ display: 'none' }}>
                                <li><NavLink activeClassName="active" to="/admin/expense-reports"> Expense Report </NavLink></li>
                                <li><NavLink activeClassName="active" to="/admin/invoice-reports"> Invoice Report </NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/calendar">Calendar</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="submenu">
                    <a onClick={this.showDropdown} href="#"><i className="fa fa-shopping-cart" aria-hidden="true" /> <span> Ecommerce </span>
                        <span className="menu-arrow" /></a>
                    <ul className="list-unstyled" style={{ display: 'none' }}>
                        <li><NavLink activeClassName="active" to="/admin/products"> Products </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/products-list"> Products List </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/product-details"> Product Details </NavLink></li>
                        <li data-name='Add Product' data-toggle="modal" data-target="#add-product" onClick={showModal}><NavLink activeClassName="active" to="/admin/add-product"> Add Product </NavLink></li>
                        <li data-name='Edit Product' data-toggle="modal" data-target="#edit-product" onClick={showModal}><NavLink activeClassName="active" to="/admin/edit-product"> Edit Product </NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin/orders"> Orders </NavLink></li>
                    </ul>
                </li>
            </ul>

        )
    }
}
