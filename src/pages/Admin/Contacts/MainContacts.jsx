import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class MainContacts extends Component {
    render() {
        let {listUser} = this.props;
        return (
            <div className="contacts-list col-sm-8 col-lg-9">
                <ul className="contact-list">
                    {listUser && listUser.map((user,index)=>{
                        return(
                            <li key={index}>
                                <div className="contact-cont">
                                    <div className="float-left user-img m-r-10">
                                        <Link to="/admin/profile" title="John Doe"><img src="../assets/img/user.jpg" className="w-40 rounded-circle" /><span className="status online" /></Link>
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-name text-ellipsis">{user.uName}</span>
                                        <span className="contact-date">{user.designation}</span>
                                    </div>
                                    <ul className="contact-action">
                                        <li className="dropdown dropdown-action">
                                            <a href="#" className="dropdown-toggle action-icon" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
    }
}
export default connect(mapStateToProps)(MainContacts);