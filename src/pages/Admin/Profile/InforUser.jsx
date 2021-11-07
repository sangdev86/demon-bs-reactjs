import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InforUser extends Component {
    render() {
        let {profile} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-7 col-4">
                        <h4 className="page-title">My Profile</h4>
                    </div>
                    <div className="col-sm-5 col-8 text-right m-b-30">
                        <Link to="/admin/edit-profile" className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Edit Profile</Link>
                    </div>
                </div>
                <div className="card-box">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-view">
                                <div className="profile-img-wrap">
                                    <div className="profile-img">
                                        <a href="#"><img className="avatar" src="../assets/img/user.jpg" /></a>
                                    </div>
                                </div>
                                <div className="profile-basic">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="profile-info-left">
                                                <h3 className="user-name m-t-0 m-b-0">{`${profile.firstName} ${profile.lastName}`}</h3>
                                                <small className="text-muted">{profile.designation}</small>
                                                <div className="staff-id">{`Employee ID : FT-000${profile.uid}`}</div>
                                                <div className="staff-msg"><Link to="/admin/chat" className="btn btn-primary">Send Message</Link></div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="personal-info">
                                                <li>
                                                    <span className="title">Phone:</span>
                                                    <span className="text"><a href="#">{profile.inforContact.numberPhone}</a></span>
                                                </li>
                                                <li>
                                                    <span className="title">Email:</span>
                                                    <span className="text"><a href="#"><span className="__cf_email__" data-cfemail="83e9ecebede7ece6c3e6fbe2eef3efe6ade0ecee">[email&nbsp;protected]</span></a></span>
                                                </li>
                                                <li>
                                                    <span className="title">Birthday:</span>
                                                    <span className="text">{profile.birthDate}</span>
                                                </li>
                                                <li>
                                                    <span className="title">Address:</span>
                                                    <span className="text">{`${profile.inforContact.address}, ${profile.inforContact.city}, ${profile.inforContact.country} `}</span>
                                                </li>
                                                <li>
                                                    <span className="title">Gender:</span>
                                                    <span className="text">{profile.gendar}</span>
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

        )
    }
}
