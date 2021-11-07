import React, { Component } from 'react'

export default class ChangePassword extends Component {
    render() {
        return (
            <div className="content container-fluid" >
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="page-title">Change Password</h4>
                        <form>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Old password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>New password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Confirm password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-center m-t-20">
                                    <button type="button" className="btn btn-primary btn-lg">Update Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
