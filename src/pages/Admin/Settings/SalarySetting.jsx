import React, { Component } from 'react'

export default class SalarySetting extends Component {
    render() {
        return (
            <div className = "content container-fluid" >
                <div className="col-md-8 offset-md-2">
                    <form>
                        <h3 className="page-title">Salary Settings</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>DA (%)</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>HRA (%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <h3 className="page-sub-title">Provident Fund Settings</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Employee Share (%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Organization Share (%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <h3 className="page-sub-title">ESI Settings</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Employee Share (%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Organization Share (%)</label>
                                    <input className="form-control" type="text" />
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
        )
    }
}
