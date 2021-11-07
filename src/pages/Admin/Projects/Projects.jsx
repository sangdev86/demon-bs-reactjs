import React, { Component } from 'react';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import {Link} from 'react-router-dom'
import HeaderEmployees from '../Components/HeaderEmployees';

export default class Projects extends Component {
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
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Projects" />
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                        <div className="card-box project-box">
                            <div className="dropdown dropdown-action profile-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" data-name="Edit Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_project"><i className="fas fa-pen m-r-5" /> Edit</a>
                                    <a className="dropdown-item" data-name="Delete Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                </div>
                            </div>
                            <h4 className="project-title"><Link to="./admin/project-view">Office Management</Link></h4>
                            <small className="block text-ellipsis m-b-15">
                                <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                                <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                            </small>
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. When an unknown printer took a galley of type and scrambled it...
                            </p>
                            <div className="pro-deadline m-b-15">
                                <div className="sub-title">
                                    Deadline:
                                </div>
                                <div className="text-muted">
                                    8 Sep 2017
                                </div>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Project Leader :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img src="../assets/img/user.jpg" alt="Jeffery Lalor" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Team :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Doe"><img src="../assets/img/user.jpg" alt="John Doe" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img src="../assets/img/user.jpg" alt="Richard Miles" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Smith"><img src="../assets/img/user.jpg" alt="John Smith" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img src="../assets/img/user.jpg" alt="Mike Litorus" /></a>
                                    </li>
                                    <li>
                                        <a href="#" className="all-users">+15</a>
                                    </li>
                                </ul>
                            </div>
                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                            <div className="progress progress-xs m-b-0">
                                <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: '40%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                        <div className="card-box project-box">
                            <div className="dropdown dropdown-action profile-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" data-name="Edit Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_project"><i className="fas fa-pen m-r-5" /> Edit</a>
                                    <a className="dropdown-item" data-name="Delete Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                </div>
                            </div>
                            <h4 className="project-title"><Link to="./admin/project-view">Project Management</Link></h4>
                            <small className="block text-ellipsis m-b-15">
                                <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                                <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                            </small>
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. When an unknown printer took a galley of type and scrambled it...
                            </p>
                            <div className="pro-deadline m-b-15">
                                <div className="sub-title">
                                    Deadline:
                                </div>
                                <div className="text-muted">
                                    8 Sep 2017
                                </div>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Project Leader :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img src="../assets/img/user.jpg" alt="Jeffery Lalor" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Team :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Doe"><img src="../assets/img/user.jpg" alt="John Doe" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img src="../assets/img/user.jpg" alt="Richard Miles" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Smith"><img src="../assets/img/user.jpg" alt="John Smith" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img src="../assets/img/user.jpg" alt="Mike Litorus" /></a>
                                    </li>
                                    <li>
                                        <a href="#" className="all-users">+15</a>
                                    </li>
                                </ul>
                            </div>
                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                            <div className="progress progress-xs m-b-0">
                                <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: '40%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                        <div className="card-box project-box">
                            <div className="dropdown dropdown-action profile-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" data-name="Edit Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_project"><i className="fas fa-pen m-r-5" /> Edit</a>
                                    <a className="dropdown-item" data-name="Delete Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                </div>
                            </div>
                            <h4 className="project-title"><Link to="./admin/project-view">Video Calling App</Link></h4>
                            <small className="block text-ellipsis m-b-15">
                                <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                                <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                            </small>
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. When an unknown printer took a galley of type and scrambled it...
                            </p>
                            <div className="pro-deadline m-b-15">
                                <div className="sub-title">
                                    Deadline:
                                </div>
                                <div className="text-muted">
                                    8 Sep 2017
                                </div>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Project Leader :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img src="../assets/img/user.jpg" alt="Jeffery Lalor" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Team :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Doe"><img src="../assets/img/user.jpg" alt="John Doe" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img src="../assets/img/user.jpg" alt="Richard Miles" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Smith"><img src="../assets/img/user.jpg" alt="John Smith" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img src="../assets/img/user.jpg" alt="Mike Litorus" /></a>
                                    </li>
                                    <li>
                                        <a href="#" className="all-users">+15</a>
                                    </li>
                                </ul>
                            </div>
                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                            <div className="progress progress-xs m-b-0">
                                <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: '40%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                        <div className="card-box project-box">
                            <div className="dropdown dropdown-action profile-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" data-name="Edit Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#edit_project"><i className="fas fa-pen m-r-5" /> Edit</a>
                                    <a className="dropdown-item" data-name="Delete Project" onClick={this.showModal} href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                </div>
                            </div>
                            <h4 className="project-title"><Link to="./admin/project-view">Hospital Administration</Link></h4>
                            <small className="block text-ellipsis m-b-15">
                                <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                                <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                            </small>
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. When an unknown printer took a galley of type and scrambled it...
                            </p>
                            <div className="pro-deadline m-b-15">
                                <div className="sub-title">
                                    Deadline:
                                </div>
                                <div className="text-muted">
                                    8 Sep 2017
                                </div>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Project Leader :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img src="../assets/img/user.jpg" alt="Jeffery Lalor" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="project-members m-b-15">
                                <div>Team :</div>
                                <ul className="team-members">
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Doe"><img src="../assets/img/user.jpg" alt="John Doe" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img src="../assets/img/user.jpg" alt="Richard Miles" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="John Smith"><img src="../assets/img/user.jpg" alt="John Smith" /></a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img src="../assets/img/user.jpg" alt="Mike Litorus" /></a>
                                    </li>
                                    <li>
                                        <a href="#" className="all-users">+15</a>
                                    </li>
                                </ul>
                            </div>
                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                            <div className="progress progress-xs m-b-0">
                                <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{ width: '40%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
