import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class MessagesList extends Component {
    render() {
        let { listUser, currentUser} = this.props;
        return (
            <div className="notification-box">
                <div className="msg-sidebar notifications msg-noti">
                    <div className="topnav-dropdown-header">
                        <span>Messages</span>
                    </div>
                    <div className="drop-scroll msg-list-scroll">
                        <ul className="list-box">
                            {
                                listUser && listUser.map((user, index) => {
                                    if (currentUser.uid!==user.uid) {
                                        return (
                                            <li key={index}>
                                                <a href="#">
                                                    <div className="list-item">
                                                        <div className="list-left">
                                                            <span className="avatar">{user.uName.slice(0, 1)}</span>
                                                        </div>
                                                        <div className="list-body">
                                                            <span className="message-author">{user.uName}</span>
                                                            <span className="message-time">12:28 AM</span>
                                                            <div className="clearfix" />
                                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className="topnav-dropdown-footer">
                        <Link to="/admin/chat">See all messages</Link>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
        currentUser: state.userReducer.currentUser,
    }
}
export default connect(mapStateToProps, null)(MessagesList);
