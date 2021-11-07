import React, { Component } from 'react'

export default class ThemeSetting extends Component {
    render() {
        return (
            <div className="content container-fluid" >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <h4 className="page-title">Theme Settings</h4>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Website Name</label>
                                <div className="col-lg-9">
                                    <input name="website_name" className="form-control" defaultValue="Gmsadmin" type="text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Light Logo</label>
                                <div className="col-lg-7">
                                    <input className="form-control" type="file" />
                                    <span className="form-text text-muted">Recommended image size is 40px x 40px</span>
                                </div>
                                <div className="col-lg-2">
                                    <div className="img-thumbnail float-right"><img src="../assets/img/logo.png" alt="logo" width={40} height={40} /></div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Favicon</label>
                                <div className="col-lg-7">
                                    <input className="form-control" type="file" />
                                    <span className="form-text text-muted">Recommended image size is 16px x 16px</span>
                                </div>
                                <div className="col-lg-2">
                                    <div className="settings-image img-thumbnail float-right"><img src="../assets/img/logo.png" className="img-fluid" width={16} height={16} alt="logo2" />
                                    </div>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary btn-lg">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
