import React, { Component } from 'react'

export default class AddPricing extends Component {
    render() {
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h4 className="page-title">Add Pricing</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="form-group">
                                <label>Pricing Name</label>
                                <input className="form-control" type="text" placeholder="Free Trial" />
                            </div>
                            <div className="form-group">
                                <label>Pricing Amount</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Pricing Description</label>
                                <textarea cols={30} rows={6} className="form-control" defaultValue={""} />
                            </div>
                            <div className="form-group">
                                <label className="display-block">Pricing Status</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="pricing_active" defaultValue="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="pricing_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="pricing_inactive" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="pricing_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary btn-lg">Publish Pricing</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
