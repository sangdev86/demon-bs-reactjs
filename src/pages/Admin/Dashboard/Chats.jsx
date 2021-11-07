import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Chats extends Component {
    renderChats=()=>{
        let { chats, currentUser} = this.props;
        return chats && chats.map((chat,index)=>{
            if (currentUser.uid === chat.uid) {
                return(
                    <div key={index} className="chat chat-right">
                        <div className="chat-body">
                            <div className="chat-bubble">
                                <div className="chat-content">
                                    <p>{chat.content}</p>
                                    <span className="chat-time">{chat.times}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div key={index} className="chat chat-left">
                        <div className="chat-avatar">
                            <Link to="admin/profile" className="avatar">
                                <img alt="John Doe" src={(chat.imgUser || chat.imgUser != '') ? chat.imgUser :'../assets/img/user.jpg'} className="img-fluid rounded-circle" />
                            </Link>
                        </div>
                        <div className="chat-body">
                            <div className="chat-bubble">
                                <div className="chat-content">
                                    <p>{chat.content}</p>
                                    {/* <p>Will you tell me something about yourself? </p> */}
                                    <span className="chat-time">{chat.times}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="card chat-panel">
                    <div className="card-header bg-white">
                        <div className="user-details">
                            <div className="float-left user-img m-r-10">
                                <Link to="/admin/profile" title="Mike Litorus"><img src="../assets/img/user.jpg" alt="user.png" className="w-40 rounded-circle" /><span className="status online" /></Link>
                            </div>
                            <div className="user-info float-left">
                                <Link to="/admin/profile" title="Mike Litorus"><span className="font-bold">{this.props.toUser.uName}</span> <i className="typing-text">Typing...</i></Link>
                                <span className="last-seen">Last seen today at 7:50 AM</span>
                            </div>
                        </div>
                        <ul className="nav float-right custom-menu d-none d-lg-flex">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/voice-call"><i className="fas fa-phone-alt" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/video-call"><i className="fas fa-video" /></Link>
                            </li>
                            <li className="nav-item dropdown dropdown-action">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Delete Conversations</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="chats">
                            {this.renderChats()}
                            <div className="chat chat-left">
                                <div className="chat-avatar">
                                    <Link to="/admin/profile" className="avatar">
                                        <img alt="John Doe" src="../assets/img/user.jpg" className="img-fluid rounded-circle" />
                                    </Link>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-bubble">
                                        <div className="chat-content">
                                            <p>Typing ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white">
                        <div className="message-bar">
                            <div className="message-inner">
                                <a className="link attach-icon" href="#"><img src="../assets/img/attachment.png" /></a>
                                <div className="message-area">
                                    <div className="input-group">
                                        <textarea className="form-control" placeholder="Type message..." defaultValue={""} />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button"><i className="fas fa-paper-plane" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        chats: state.chatsReducer.chats,
        toUser: state.chatsReducer.toUser,
        currentUser: state.userReducer.currentUser,
    }
}
export default connect(mapStateToProps, null)(Chats);
