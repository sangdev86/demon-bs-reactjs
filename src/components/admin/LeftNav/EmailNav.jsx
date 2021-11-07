import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class EmailNav extends Component {
    render() {
        return (
            <ul>
                <div>
                    <li>
                        <NavLink exact to="/admin"><i className="fa fa-home back-icon" /> Back to Home</NavLink>
                    </li>
                    <li className="menu-title"><NavLink to="/admin/compose" className="btn btn-primary btn-block">Compose</NavLink></li>
                </div>
                {/* <li>
                    <NavLink activeClassName="active" to="/admin/inbox"><i className="fa fa-home back-icon" /> Back to Inbox</NavLink>
                </li> */}
                <li>
                    <NavLink activeClassName="active" to="/admin/inbox">Inbox <span className="mail-count">(21)</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a">Starred</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a">Sent Mail</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a">Draft <span className="mail-count">(8)</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a">Trash</NavLink>
                </li>
                <li className="menu-title">Label <NavLink activeClassName="active" to="/admin/a" className="add-user-icon"><i className="fa fa-plus" /></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a"><i className="fa fa-circle text-success mail-label" /> Work</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a"><i className="fa fa-circle text-danger mail-label" /> Office</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/a"><i className="fa fa-circle text-warning mail-label" /> Personal</NavLink>
                </li>
            </ul>

        )
    }
}
