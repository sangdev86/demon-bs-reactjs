import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Capitalize } from '../../../classes/FormatSlug';
export default class LockScreen extends Component {
    render() {
        let titleName = this.props.location.pathname
        if (titleName === '/admin') {
            document.title = 'Dashboard';
        }else{
            let title = titleName.replace("/admin/", "");

            document.title = Capitalize(title);
        }
        return (
            <div className="main-wrapper error-wrapper">
                <div className="error-box">
                    <form action="/admin">
                        <div className="lock-user">
                            <img className="rounded-circle" src="../assets/img/user.jpg" />
                            <h6>John Doe</h6>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Enter Password" type="password" />
                        </div>
                        <div className="text-center">
                            <Link to="/admin/forgot-password">Sign in as a different user?</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
