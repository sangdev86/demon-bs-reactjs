import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SettingsNav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/admin"><i className="fa fa-home back-icon" /> Back to Home</NavLink>
                </li>
                <li className="menu-title">Settings</li>
                <li>
                    <NavLink activeClassName="active" to="/admin/settings">Company Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/localization">Localization</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/theme-settings">Theme Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/roles-permissions">Roles &amp; Permissions</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/email-settings">Email Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/invoice-settings">Invoice Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/salary-settings">Salary Settings</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/notifications-settings">Notifications</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/change-password">Change Password</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/leave-type">Leave Type</NavLink>
                </li>
            </ul>

        )
    }
}
