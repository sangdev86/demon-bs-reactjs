import React, { Component } from 'react'
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal'
import RolesPermissionsNav from '../Components/RolesPermissionsNav'

export default class RolesPermissionsSetting extends Component {
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
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-8">
                        <h4 className="page-title">Roles &amp; Permissions</h4>
                    </div>
                </div>
                <div className="row">
                    <RolesPermissionsNav act="RolesPermissions" showModal={this.showModal} />
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
                        <h6 className="card-title m-b-20">Module Access</h6>
                        <div className="m-b-30">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Employee
                                    <div className="material-switch float-right">
                                        <input id="staff_module" type="checkbox" />
                                        <label htmlFor="staff_module" className="badge-success" />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Holidays
                                    <div className="material-switch float-right">
                                        <input id="holidays_module" type="checkbox" />
                                        <label htmlFor="holidays_module" className="badge-success" />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Leave Request
                                    <div className="material-switch float-right">
                                        <input id="leave_module" type="checkbox" />
                                        <label htmlFor="leave_module" className="badge-success" />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Events
                                    <div className="material-switch float-right">
                                        <input id="events_module" type="checkbox" />
                                        <label htmlFor="events_module" className="badge-success" />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Chat
                                    <div className="material-switch float-right">
                                        <input id="chat_module" type="checkbox" />
                                        <label htmlFor="chat_module" className="badge-success" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>Module Permission</th>
                                        <th className="text-center">Read</th>
                                        <th className="text-center">Write</th>
                                        <th className="text-center">Create</th>
                                        <th className="text-center">Delete</th>
                                        <th className="text-center">Import</th>
                                        <th className="text-center">Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Holidays</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Leave Request</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Events</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
