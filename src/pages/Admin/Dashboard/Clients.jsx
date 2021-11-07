import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Clients extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card card-table">
                    <div className="card-header bg-white">
                        <h4 className="card-title m-b-0">Clients</h4>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped custom-table m-b-0">
                            <thead>
                                <tr>
                                    <th style={{ minWidth: 200 }}>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ minWidth: 200 }}>
                                        <a href="#" className="avatar">B</a>
                                        <h2><Link to="/admin/client-profile">Barry Cuda <span>CEO</span></Link></h2>
                                    </td>
                                    <td><a href="#" className="__cf_email__" data-cfemail="bad8dbc8c8c3d9cfdedbfadfc2dbd7cad6df94d9d5d7">[email&nbsp;protected]</a>
                                    </td>
                                    <td>
                                        <div className="dropdown action-label">
                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-success" /> Active
                </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                <a className="dropdown-item" href="#" title="Delete"><i className="far fa-trash-alt m-r-5" />
                                                Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#" className="avatar">T</a>
                                        <h2><Link to="/admin/client-profile">Tressa Wexler <span>Manager</span></Link>
                                        </h2>
                                    </td>
                                    <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="fc888e998f8f9d8b998490998ebc99849d918c9099d29f9391">[email&nbsp;protected]</a>
                                    </td>
                                    <td>
                                        <div className="dropdown action-label">
                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-danger" /> Inactive
                </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                <a className="dropdown-item" href="#" title="Delete"><i className="far fa-trash-alt m-r-5" />
                    Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/admin/client-profile" className="avatar">R</Link>
                                        <h2><Link to="/admin/client-profile">Ruby Bartlett <span>CEO</span></Link>
                                        </h2>
                                    </td>
                                    <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="344641564d565546405851404074514c55594458511a575b59">[email&nbsp;protected]</a>
                                    </td>
                                    <td>
                                        <div className="dropdown action-label">
                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-danger" /> Inactive
                </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                <a className="dropdown-item" href="#" title="Delete"><i className="far fa-trash-alt m-r-5" />
                    Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/admin/client-profile" className="avatar">M</Link>
                                        <h2><Link to="/admin/client-profile"> Misty Tison <span>CEO</span></Link></h2>
                                    </td>
                                    <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="600d091314191409130f0e200518010d100c054e030f0d">[email&nbsp;protected]</a>
                                    </td>
                                    <td>
                                        <div className="dropdown action-label">
                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-success" /> Active
                </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                <a className="dropdown-item" href="#" title="Delete"><i className="far fa-trash-alt m-r-5" />
                    Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/admin/client-profile" className="avatar">D</Link>
                                        <h2><Link to="/admin/client-profile"> Daniel Deacon <span>CEO</span></Link>
                                        </h2>
                                    </td>
                                    <td><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2246434c4b474e464743414d4c62475a434f524e470c414d4f">[email&nbsp;protected]</a>
                                    </td>
                                    <td>
                                        <div className="dropdown action-label">
                                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="far fa-dot-circle text-danger" /> Inactive
                </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-success" /> Active</a>
                                                <a className="dropdown-item" href="#"><i className="far fa-dot-circle text-danger" /> Inactive</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#" title="Edit"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                <a className="dropdown-item" href="#" title="Delete"><i className="far fa-trash-alt m-r-5" />
                                            Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <Link to="/admin/clients" className="text-muted">View all clients</Link>
                    </div>
                </div>
            </div>

        )
    }
}
