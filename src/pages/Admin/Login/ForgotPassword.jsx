import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Capitalize } from '../../../classes/FormatSlug';
export default class ForgotPassword extends Component {
    componentDidMount() {
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        };
    }
    render() {
        let titleName = this.props.location.pathname
        if (titleName === '/admin') {
            document.title = 'Dashboard';
        }else{
            let title = titleName.replace("/admin/", "");

            document.title = Capitalize(title);
        }
        return (
            <div className="account-page">
                <div className="container">
                    <h3 className="account-title">Forgot Password</h3>
                    <div className="account-box">
                        <div className="account-wrapper">
                            <div className="account-logo">
                                <Link to="/adim"><img src="../assets/img/logo.png" alt="Gmsadmin" /></Link>
                            </div>
                            <form>
                                <div className="form-group form-focus">
                                    <label className="focus-label">Username or Email</label>
                                    <input className="form-control floating" type="text" />
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-block account-btn" type="submit">Reset
                                        Password</button>
                                </div>
                                <div className="text-center">
                                    <Link to="/admin/login">Back to Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
