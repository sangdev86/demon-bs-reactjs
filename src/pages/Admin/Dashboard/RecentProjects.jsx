import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RecentProjects extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card card-table">
                    <div className="card-header bg-white">
                        <h4 className="card-title m-b-0">Recent Projects</h4>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped custom-table m-b-0">
                            <thead>
                                <tr>
                                    <th className="col-md-3">Project Name </th>
                                    <th className="col-md-3">Progress</th>
                                    <th className="text-right col-md-1">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h2><Link to="/admin/project-view">Office Management</Link></h2>
                                        <small className="block text-ellipsis">
                                            <span className="text-xs">1</span> <span className="text-muted">open tasks,
                                            </span>
                                            <span className="text-xs">9</span> <span className="text-muted">tasks
                                            completed</span>
                                        </small>
                                    </td>
                                    <td>
                                        <div className="progress progress-xs progress-striped">
                                            <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="65%" style={{ width: '65%' }} />
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
                                        <h2><Link to="/admin/project-view">Project Management</Link></h2>
                                        <small className="block text-ellipsis">
                                            <span className="text-xs">2</span> <span className="text-muted">open tasks,
                                            </span>
                                            <span className="text-xs">5</span> <span className="text-muted">tasks
                                            completed</span>
                                        </small>
                                    </td>
                                    <td>
                                        <div className="progress progress-xs progress-striped">
                                            <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="15%" style={{ width: '15%' }} />
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
                                        <h2><Link to="/admin/project-view">Video Calling App</Link></h2>
                                        <small className="block text-ellipsis">
                                            <span className="text-xs">3</span> <span className="text-muted">open tasks,
                                            </span>
                                            <span className="text-xs">3</span> <span className="text-muted">tasks
                                            completed</span>
                                        </small>
                                    </td>
                                    <td>
                                        <div className="progress progress-xs progress-striped">
                                            <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="49%" style={{ width: '49%' }} />
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
                                        <h2><Link to="/admin/project-view">Hospital Administration</Link></h2>
                                        <small className="block text-ellipsis">
                                            <span className="text-xs">12</span> <span className="text-muted">open tasks,
                                            </span>
                                            <span className="text-xs">4</span> <span className="text-muted">tasks
                                            completed</span>
                                        </small>
                                    </td>
                                    <td>
                                        <div className="progress progress-xs progress-striped">
                                            <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="88%" style={{ width: '88%' }} />
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
                                        <h2><Link to="/admin/project-view">Digital Marketplace</Link></h2>
                                        <small className="block text-ellipsis">
                                            <span className="text-xs">7</span> <span className="text-muted">open tasks,
                                            </span>
                                            <span className="text-xs">14</span> <span className="text-muted">tasks
                                            completed</span>
                                        </small>
                                    </td>
                                    <td>
                                        <div className="progress progress-xs progress-striped">
                                            <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="100%" style={{ width: '100%' }} />
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
                    <div className="card-footer bg-white text-center">
                        <Link to="/admin/projects" className="text-muted">View all projects</Link>
                    </div>
                </div>
            </div>

        )
    }
}
