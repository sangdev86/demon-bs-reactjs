import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card member-panel">
                    <div className="card-header bg-white">
                        <h4 className="card-title m-b-0">Contacts</h4>
                    </div>
                    <div className="card-body">
                        <ul className="contact-list">
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="John Doe"><img src="../assets/img/user.jpg" alt="user.png" className="w-40 rounded-circle" /><span className="status online" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">John Doe</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="Richard Miles"><img src="../assets/img/user.jpg"  className="w-40 rounded-circle" /><span className="status offline" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">Richard Miles</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="John Doe"><img src="../assets/img/user.jpg"  className="w-40 rounded-circle" /><span className="status away" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">John Doe</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="Richard Miles"><img src="../assets/img/user.jpg" className="w-40 rounded-circle" /><span className="status online" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">Richard Miles</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="John Doe"><img src="../assets/img/user.jpg"  className="w-40 rounded-circle" /><span className="status offline" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">John Doe</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="Richard Miles"><img src="../assets/img/user.jpg"  className="w-40 rounded-circle" /><span className="status away" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">Richard Miles</span>
                                        <span className="contact-date">Web Developer</span>
                                    </div>
                                    <div className="contact-action">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <Link to="/admin/users" className="text-muted">View all members</Link>
                    </div>
                </div>
            </div>

        )
    }
}
