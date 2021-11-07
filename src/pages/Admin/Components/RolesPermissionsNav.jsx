import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RolesPermissionsNav extends Component {
    renderLeftNav = () => {
        let { showModal } = this.props;
        switch (this.props.act) {
            case 'RolesPermissions':
                return (
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
                        <a href="#" className="btn btn-primary btn-block" data-name='Add Roles' data-toggle="modal" data-target="#add_roles" onClick={showModal}><i className="fa fa-plus" /> Add Roles</a>
                        <div className="roles-menu">
                            <ul>
                                <li className="active">
                                    <a href="#">Administrator
                                        <span className="role-action">
                                            <span data-name='Edit Roles' className="action-circle large" title="Edit" data-toggle="modal" onClick={showModal} data-target="#edit_roles" >
                                                <i data-name='Edit Roles' className="material-icons">edit</i>
                                            </span>
                                            <span data-name='Delete Roles' className="action-circle large delete-btn" title="Delete" onClick={showModal} data-toggle="modal" data-target="#delete">
                                                <i className="material-icons">delete</i>
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li><a href="#">CEO</a></li>
                                <li><a href="#">Manager</a></li>
                                <li><a href="#">Team Leader</a></li>
                                <li><a href="#">Accountant</a></li>
                                <li><a href="#">Web Developer</a></li>
                                <li><a href="#">Web Designer</a></li>
                                <li><a href="#">HR</a></li>
                                <li><a href="#">UI/UX Developer</a></li>
                                <li><a href="#">SEO Analyst</a></li>
                            </ul>
                        </div>
                    </div>
                )
            case 'Contacts':
                return (
                    <div className="contact-cat col-sm-4 col-lg-3">
                        <a href="#" className="btn btn-primary btn-block" data-name='Add Contact' data-toggle="modal" data-target="#add_contact" onClick={showModal}><i className="fa fa-plus" /> Add Contact</a>
                        <div className="roles-menu">
                            <ul>
                                <li className="active"><a href="#">All</a>
                                </li>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Client</a></li>
                                <li><a href="#">Staff</a></li>
                            </ul>
                        </div>
                    </div>

                )
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <>
                {this.renderLeftNav()}
            </>

        )
    }
}
