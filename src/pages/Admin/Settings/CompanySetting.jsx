import React, { Component } from 'react';
import $ from 'jquery';

export default class CompanySetting extends Component {
    componentDidMount() {
        if ($('.select').length > 0) {
            $('.select').select2({
                minimumResultsForSearch: -1,
                width: '100%'
            });
        }
    }
    render() {
        return (
            <div className = "content container-fluid" >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form>
                        <h3 className="page-title">Company Settings</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Company Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" defaultValue="Gmsadmin" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Contact Person</label>
                                    <input className="form-control " defaultValue="Daniel Porter" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input className="form-control " defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group fix-select-form">
                                    <label>Country</label>
                                    <select className="form-control select " >
                                        <option>USA</option>
                                        <option>United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label>City</label>
                                    <input className="form-control" defaultValue="Sherman Oaks" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group fix-select-form">
                                    <label>State/Province</label>
                                    <select className="form-control select ">
                                        <option>California</option>
                                        <option>Alaska</option>
                                        <option>Alabama</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input className="form-control" defaultValue={91403} type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" defaultValue="danielporter@example.com" type="email" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input className="form-control" defaultValue="818-978-7102" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input className="form-control" defaultValue="818-635-5579" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Fax</label>
                                    <input className="form-control" defaultValue="818-978-7102" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Website Url</label>
                                    <input className="form-control" defaultValue="https://www.example.com" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center m-t-20">
                                <button type="button" className="btn btn-primary btn-lg">Save &amp; update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
