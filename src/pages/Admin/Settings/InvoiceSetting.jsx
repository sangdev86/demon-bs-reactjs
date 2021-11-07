import React, { Component } from 'react'

export default class InvoiceSetting extends Component {
    render() {
        return (
            <div className="content container-fluid" >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <h4 className="page-title">Invoice Settings</h4>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Invoice prefix</label>
                                <div className="col-lg-9">
                                    <input className="form-control" defaultValue="INV" type="text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Invoice Logo</label>
                                <div className="col-lg-7">
                                    <input className="form-control" type="file" />
                                    <span className="form-text text-muted">Recommended image size is 200px x 40px</span>
                                </div>
                                <div className="col-lg-2">
                                    <div className="img-thumbnail float-right"><img src="../assets/img/logo.png" className="img-fluid" alt="logo" width={100} height={100} /></div>
                                </div>
                            </div>
                            <div className="col-sm-12 m-t-20 text-center">
                                <button type="button" className="btn btn-primary btn-lg">Save &amp; update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
