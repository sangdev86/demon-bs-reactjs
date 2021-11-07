import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class ChatsNav extends Component {
    render() {
        let {showModal} = this.props;
        return (
            <ul>
                <li>
                    <NavLink exact to="/admin"><i className="fa fa-home back-icon" /> Back to Home</NavLink>
                </li>
                <li className="menu-title">Chat Groups <a href="#" data-name='Create a group' onClick={showModal} className="add-user-icon" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus" /></a></li>
                <li>
                    <Link to="/admin/chat">#General</Link>
                </li>
                <li>
                    <Link to="/admin/chat">#Video Responsive Survey</Link>
                </li>
                <li>
                    <Link to="/admin/chat">#500rs</Link>
                </li>
                <li>
                    <Link to="/admin/chat">#warehouse</Link>
                </li>
                <li className="menu-title">Direct Chats <a href="#" data-name='Create Chat Group' onClick={showModal} className="add-user-icon" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
                <li>
                    <Link to="/admin/chat"><span className="chat-avatar-sm user-img"><img src="../assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status online" /></span> John
      Doe <span className="badge badge-pill bg-danger float-right">1</span></Link>
                </li>
                <li>
                    <Link to="/admin/chat"><span className="chat-avatar-sm user-img"><img src="../assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status offline" /></span>
      Richard Miles <span className="badge badge-pill bg-danger float-right">18</span></Link>
                </li>
                <li>
                    <Link to="/admin/chat"><span className="chat-avatar-sm user-img"><img src="../assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status away" /></span> John
      Smith</Link>
                </li>
                <li>
                    <Link to="/admin/chat"><span className="chat-avatar-sm user-img"><img src="../assets/img/user.jpg" alt="user" className="rounded-circle" /><span className="status online" /></span> Mike
      Litorus <span className="badge badge-pill bg-danger float-right">108</span></Link>
                </li>
            </ul>

        )
    }
}
