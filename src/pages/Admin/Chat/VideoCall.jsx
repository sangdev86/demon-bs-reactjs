import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RightChat from './RightChat';
export default class VideoCall extends Component {
    render() {
        return (
            <div className="chat-main-row">
                <div className="chat-main-wrapper">
                    <div className="col-lg-9 message-view task-view">
                        <div className="chat-window">
                            <div className="fixed-header">
                                <div className="navbar">
                                    <div className="user-details mr-auto">
                                        <div className="float-left user-img m-r-10">
                                            <Link to="/admin/profile" title="Mike Litorus"><img src="../assets/img/user.jpg" className="w-40 rounded-circle" /><span className="status online" /></Link>
                                        </div>
                                        <div className="user-info float-left">
                                            <Link to="/admin/profile" title="Mike Litorus"><span className="font-bold">Mike
                                                Litorus</span></Link>
                                            <span className="last-seen">Online</span>
                                        </div>
                                    </div>
                                    <ul className="nav custom-menu">
                                        <li className="nav-item">
                                            <a className="task-chat profile-rightbar float-right" href="#chat_sidebar"><i aria-hidden="true" className="fa fa-comments" /></a>
                                        </li>
                                        <li className="nav-item dropdown dropdown-action">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">Settings</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chat-contents">
                                <div className="chat-content-wrap">
                                    <div className="user-video">
                                        <img src="../assets/img/video-call.jpg" />
                                    </div>
                                    <div className="my-video">
                                        <ul>
                                            <li>
                                                <img src="../assets/img/user-02.jpg" className="img-fluid" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-footer">
                                <div className="call-icons">
                                    <span className="call-duration">00:59</span>
                                    <ul className="call-items">
                                        <li className="call-item">
                                            <a href="#" title="Enable Video" data-placement="top" data-toggle="tooltip">
                                                <i className="fas fa-video" />
                                            </a>
                                        </li>
                                        <li className="call-item">
                                            <a href="#" title="Mute Audio" data-placement="top" data-toggle="tooltip">
                                                <i className="fa fa-microphone microphone" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="call-item">
                                            <a href="#" title="Add User" data-placement="top" data-toggle="tooltip">
                                                <i className="fa fa-user-plus" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="call-item">
                                            <a href="#" title="Full Screen" data-placement="top" data-toggle="tooltip">
                                                <i className="fas fa-arrows-alt-v full-screen" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="end-call">
                                        <a href="#">
                                            End Call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <RightChat act="Call" />
                </div>
            </div>
        )
    }
}
