import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Capitalize } from '../../../classes/FormatSlug';

export default class Error500 extends Component {
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
                    <h1>500</h1>
                    <h3><i className="fas fa-exclamation-triangle" /> Oops! Something went wrong</h3>
                    <p>The page you requested was not found.</p>
                    <Link to="/admin" className="btn btn-primary go-home">Go to Home</Link>
                </div>
            </div>

        )
    }
}
