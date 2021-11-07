import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RightChat extends Component {
    renderRightChat = () => {
        switch (this.props.act) {
            case 'Chat':
                return (
                    <div className="chat-window video-window">
                        <div className="fixed-header">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item"><a className="nav-link" href="#calls_tab" data-toggle="tab">Calls</a></li>
                                <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab">Profile</a></li>
                            </ul>
                        </div>
                        <div className="tab-content chat-contents">
                            <div className="content-full tab-pane" id="calls_tab">
                                <div className="chat-wrap-inner">
                                    <div className="chat-box">
                                        <div className="chats">
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">phone_missed</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <span className="call-description">Jeffrey
                                                                            Warden missed the call</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">John Doe</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">call_end</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details"><span className="call-description">This call has
                                                                        ended</span></div>
                                                                    <div className="call-timing">Duration: <strong>5 min
                                                                        57 sec</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-line">
                                                <span className="chat-date">January 29th, 2015</span>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">Richard Miles</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">phone_missed</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <span className="call-description">You missed
                                                                            the call</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">ring_volume</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <a href="#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling
                                                                            John Smith ...</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-full tab-pane show active" id="profile_tab">
                                <div className="display-table">
                                    <div className="table-row">
                                        <div className="table-body">
                                            <div className="table-content">
                                                <div className="chat-profile-img">
                                                    <div className="edit-profile-img">
                                                        <img src="../../assets/img/user.jpg" />
                                                        <span className="change-img">Change Image</span>
                                                    </div>
                                                    <h3 className="user-name m-t-10 m-b-0">John Doe</h3>
                                                    <small className="text-muted">Web Designer</small>
                                                    <Link to="/admin/edit-profile" className="btn btn-primary edit-btn"><i className="fas fa-pen" /></Link>
                                                </div>
                                                <div className="chat-profile-info">
                                                    <ul className="user-det-list">
                                                        <li>
                                                            <span>Username:</span>
                                                            <span className="float-right text-muted">johndoe</span>
                                                        </li>
                                                        <li>
                                                            <span>DOB:</span>
                                                            <span className="float-right text-muted">24 July</span>
                                                        </li>
                                                        <li>
                                                            <span>Email:</span>
                                                            <span className="float-right text-muted"><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a5cfcacdcbc1cac0e5c0ddc4c8d5c9c08bc6cac8">[email&nbsp;protected]</a></span>
                                                        </li>
                                                        <li>
                                                            <span>Phone:</span>
                                                            <span className="float-right text-muted">9876543210</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="transfer-files">
                                                    <ul className="nav nav-tabs nav-tabs-solid nav-justified m-b-0">
                                                        <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane show active" id="all_files">
                                                            <ul className="files-list">
                                                                <li>
                                                                    <div className="files-cont">
                                                                        <div className="file-type">
                                                                            <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                                                        </div>
                                                                        <div className="files-info">
                                                                            <span className="file-name text-ellipsis">AHA
                                                                                Selfcare Mobile Application
                                                                                Test-Cases.xls</span>
                                                                            <span className="file-author"><a href="#">Loren Gatlin</a></span>
                                                                            <span className="file-date">May 31st at 6:53
                                                                                PM</span>
                                                                        </div>
                                                                        <ul className="files-action">
                                                                            <li className="dropdown dropdown-action">
                                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Download</a>
                                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tab-pane" id="my_files">
                                                            <ul className="files-list">
                                                                <li>
                                                                    <div className="files-cont">
                                                                        <div className="file-type">
                                                                            <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                                                        </div>
                                                                        <div className="files-info">
                                                                            <span className="file-name text-ellipsis">AHA
                                                                                Selfcare Mobile Application
                                                                                Test-Cases.xls</span>
                                                                            <span className="file-author"><a href="#">John Doe</a></span>
                                                                            <span className="file-date">May 31st at 6:53
                                                                                PM</span>
                                                                        </div>
                                                                        <ul className="files-action">
                                                                            <li className="dropdown dropdown-action">
                                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Download</a>
                                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'Call':
                return (
                    <div className="chat-window video-window">
                        <div className="fixed-header">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item"><a className="nav-link active" href="#calls_tab" data-toggle="tab">Calls</a></li>
                                <li className="nav-item"><a className="nav-link" href="#chats_tab" data-toggle="tab">Chats</a></li>
                                <li className="nav-item"><a className="nav-link" href="#profile_tab" data-toggle="tab">Profile</a></li>
                            </ul>
                        </div>
                        <div className="tab-content chat-contents">
                            <div className="content-full tab-pane show active" id="calls_tab">
                                <div className="chat-wrap-inner">
                                    <div className="chat-box">
                                        <div className="chats">
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">phone_missed</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <span className="call-description">Jeffrey
                                                                            Warden missed the call</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">John Doe</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">call_end</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details"><span className="call-description">This call has
                                                                        ended</span></div>
                                                                    <div className="call-timing">Duration: <strong>5 min
                                                                        57 sec</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-line">
                                                <span className="chat-date">January 29th, 2015</span>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">Richard Miles</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">phone_missed</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <span className="call-description">You missed
                                                                            the call</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat chat-left">
                                                <div className="chat-avatar">
                                                    <Link to="/admin/profile" className="avatar">
                                                        <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                    </Link>
                                                </div>
                                                <div className="chat-body">
                                                    <div className="chat-bubble">
                                                        <div className="chat-content">
                                                            <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                            <div className="call-details">
                                                                <i className="material-icons">ring_volume</i>
                                                                <div className="call-info">
                                                                    <div className="call-user-details">
                                                                        <a href="#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling
                                                                            John Smith ...</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-full tab-pane" id="chats_tab">
                                <div className="chat-window">
                                    <div className="chat-contents">
                                        <div className="chat-content-wrap">
                                            <div className="chat-wrap-inner">
                                                <div className="chat-box">
                                                    <div className="chats">
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <Link to="/admin/profile" className="avatar">
                                                                    <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                                </Link>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-bubble">
                                                                    <div className="chat-content">
                                                                        <span className="task-chat-user">John Doe</span>
                                                                        <span className="chat-time">8:35 am</span>
                                                                        <p>I'm just looking around.</p>
                                                                        <p>Will you tell me something about
                                                                            yourself? </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <Link to="/admin/profile" className="avatar">
                                                                    <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                                </Link>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-bubble">
                                                                    <div className="chat-content">
                                                                        <span className="task-chat-user">John Doe</span>
                                                                        <span className="file-attached">attached 3 files
                                                                            <i className="fa fa-paperclip" aria-hidden="true" /></span> <span className="chat-time">Dec 17, 2014 at
                                                                                4:32am</span>
                                                                        <ul className="attach-list">
                                                                            <li><i className="fa fa-file" /> <a href="#">project_document.avi</a>
                                                                            </li>
                                                                            <li><i className="fa fa-file" /> <a href="#">video_conferencing.psd</a>
                                                                            </li>
                                                                            <li><i className="fa fa-file" /> <a href="#">landing_page.psd</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-line">
                                                            <span className="chat-date">January 29th, 2017</span>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <Link to="/admin/profile" className="avatar">
                                                                    <img alt="Jeffery Lalor" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                                </Link>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-bubble">
                                                                    <div className="chat-content">
                                                                        <span className="task-chat-user">Jeffery
                                                                            Lalor</span> <span className="file-attached">attached file <i className="fa fa-paperclip" aria-hidden="true" /></span> <span className="chat-time">Yesterday at
                                                                                9:16pm</span>
                                                                        <ul className="attach-list">
                                                                            <li className="pdf-file"><i className="far fa-file-pdf" /> <a href="#">Document_2016.pdf</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <Link to="/admin/profile" className="avatar">
                                                                    <img alt="Jeffery Lalor" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                                </Link>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-bubble">
                                                                    <div className="chat-content">
                                                                        <span className="task-chat-user">Jeffery
                                                                            Lalor</span> <span className="file-attached">attached file <i className="fa fa-paperclip" aria-hidden="true" /></span> <span className="chat-time">Today at
                                                                                12:42pm</span>
                                                                        <ul className="attach-list">
                                                                            <li className="img-file">
                                                                                <div className="attach-img-download"><a href="#">avatar-1.jpg</a>
                                                                                </div>
                                                                                <div className="task-attach-img"><img src="../assets/img/user.jpg" /></div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <div className="message-bar">
                                            <div className="message-inner">
                                                <a className="link attach-icon" href="#" data-toggle="modal" data-target="#drag_files"><img src="../assets/img/attachment.png" /></a>
                                                <div className="message-area">
                                                    <div className="input-group">
                                                        <textarea className="form-control" placeholder="Type message..." defaultValue={""} />
                                                        <span className="input-group-append">
                                                            <button className="btn btn-primary" type="button"><i className="fas fa-paper-plane" /></button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-full tab-pane" id="profile_tab">
                                <div className="display-table">
                                    <div className="table-row">
                                        <div className="table-body">
                                            <div className="table-content">
                                                <div className="chat-profile-img">
                                                    <div className="edit-profile-img">
                                                        <img src="../assets/img/user.jpg" />
                                                        <span className="change-img">Change Image</span>
                                                    </div>
                                                    <h3 className="user-name m-t-10 m-b-0">John Doe</h3>
                                                    <small className="text-muted">Web Designer</small>
                                                    <Link to="/admin/profile" className="btn btn-primary edit-btn"><i className="fas fa-pen" /></Link>
                                                </div>
                                                <div className="chat-profile-info">
                                                    <ul className="user-det-list">
                                                        <li>
                                                            <span>Username:</span>
                                                            <span className="float-right text-muted">johndoe</span>
                                                        </li>
                                                        <li>
                                                            <span>DOB:</span>
                                                            <span className="float-right text-muted">24 July</span>
                                                        </li>
                                                        <li>
                                                            <span>Email:</span>
                                                            <span className="float-right text-muted"><a href="https://dreamguys.co.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="167c797e7872797356736e777b667a733875797b">[email&nbsp;protected]</a></span>
                                                        </li>
                                                        <li>
                                                            <span>Phone:</span>
                                                            <span className="float-right text-muted">9876543210</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul className="nav nav-tabs nav-tabs-solid nav-justified m-b-0">
                                                        <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane show active" id="all_files">
                                                            <ul className="files-list">
                                                                <li>
                                                                    <div className="files-cont">
                                                                        <div className="file-type">
                                                                            <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                                                        </div>
                                                                        <div className="files-info">
                                                                            <span className="file-name text-ellipsis">AHA
                                                                                Selfcare Mobile Application
                                                                                Test-Cases.xls</span>
                                                                            <span className="file-author"><a href="#">Loren Gatlin</a></span>
                                                                            <span className="file-date">May 31st at 6:53
                                                                                PM</span>
                                                                        </div>
                                                                        <ul className="files-action">
                                                                            <li className="dropdown dropdown-action">
                                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Download</a>
                                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="tab-pane" id="my_files">
                                                            <ul className="files-list">
                                                                <li>
                                                                    <div className="files-cont">
                                                                        <div className="file-type">
                                                                            <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                                                        </div>
                                                                        <div className="files-info">
                                                                            <span className="file-name text-ellipsis">AHA
                                                                                Selfcare Mobile Application
                                                                                Test-Cases.xls</span>
                                                                            <span className="file-author"><a href="#">John Doe</a></span>
                                                                            <span className="file-date">May 31st at 6:53
                                                                                PM</span>
                                                                        </div>
                                                                        <ul className="files-action">
                                                                            <li className="dropdown dropdown-action">
                                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h" /></a>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Download</a>
                                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            default:
                break;
        }
    }
    render() {
        return (
            <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="chat_sidebar">
                {this.renderRightChat()}
            </div>
        )
    }
}
