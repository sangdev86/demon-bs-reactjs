import React, { Component } from 'react'

export default class AddContacts extends Component {
    render() {
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h4 className="page-title">Add Contact</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="display-block">Contact Status</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="contact_active" defaultValue="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="contact_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="contact_inactive" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="contact_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary btn-lg">Add Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
