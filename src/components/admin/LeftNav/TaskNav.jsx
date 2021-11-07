import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class TaskNav extends Component {
    render() {
        let {showModal} = this.props;
        return (
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/admin"><i className="fa fa-home back-icon" /> Back to Home</NavLink>
                </li>
                <li className="menu-title">Projects <a href="#" data-name='Create Project' onClick={showModal} className="add-user-icon" data-toggle="modal" data-target="#create_project"><i className="fa fa-plus" /></a></li>
                <li>
                    <NavLink activeClassName="active" to="/admin/tasks1">Project Management</NavLink>
                </li>
                <li >
                    <NavLink activeClassName="active" to="/admin/tasks2">Hospital Administration</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/tasks3">Video Calling App</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/admin/tasks4">Office Management</NavLink>
                </li>
            </ul>

        )
    }
}
