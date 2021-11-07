import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Notifications extends Component {
    render() {
        return (
            <ul className="nav user-menu float-right">
                {/* notifications */}
                <li className="nav-item dropdown d-none d-sm-block">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="far fa-bell" />
                        <span className="badge badge-pill bg-primary float-right">3</span></a>
                    <div className="dropdown-menu notifications mt-0">
                        <div className="topnav-dropdown-header">
                            <span>Notifications</span>
                        </div>
                        <div className="drop-scroll">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <Link to="/admin/activities">
                                        <div className="media">
                                            <span className="avatar">
                                                <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">John Doe</span> added
                                                        new task <span className="noti-title">Patient appointment booking</span>
                                                </p>
                                                <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="/admin/activities">
                                        <div className="media">
                                            <span className="avatar">V</span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Tarah Shropshire</span>
                                                        changed the task name <span className="noti-title">Appointment booking
                                                            with payment gateway</span></p>
                                                <p className="noti-time"><span className="notification-time">6 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="/admin/activities">
                                        <div className="media">
                                            <span className="avatar">L</span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Misty Tison</span>
                                                        added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="/admin/activities">
                                        <div className="media">
                                            <span className="avatar">G</span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Rolland Webber</span>
                                                        completed task <span className="noti-title">Patient and Doctor video
                                                            conferencing</span></p>
                                                <p className="noti-time"><span className="notification-time">12 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="notification-message">
                                    <Link to="/admin/activities">
                                        <div className="media">
                                            <span className="avatar">V</span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span>
                                                        added new task <span className="noti-title">Private chat module</span>
                                                </p>
                                                <p className="noti-time"><span className="notification-time">2 days ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <Link to="/admin/activities">View all Notifications</Link>
                        </div>
                    </div>
                </li>
                {/* chats */}
                <li className="nav-item dropdown d-none d-sm-block">
                    <a href="#" id="open_msg_box" className="hasnotifications nav-link"><i className="far fa-comment" /> <span className="badge badge-pill bg-primary float-right">8</span></a>
                </li>
                <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span className="user-img">
                            <img className="rounded-circle" src="../assets/img/user.jpg" width={30} alt="Admin" />
                            <span className="status online" />
                        </span>
                        <span>Admin</span>
                    </a>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" activeClassName="active" to="/admin/profile">My Profile</NavLink>
                        <NavLink className="dropdown-item" activeClassName="active" to="/admin/edit-profile">Edit Profile</NavLink>
                        <NavLink className="dropdown-item" activeClassName="active" to="/admin/settings">Settings</NavLink>
                        <NavLink className="dropdown-item" activeClassName="active" to="/admin/login">Logout</NavLink>
                    </div>
                </li>
            </ul>
        )
    }
}
