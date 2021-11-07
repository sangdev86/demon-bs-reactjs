import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Invoices extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card card-table card-table-top">
                    <div className="card-header bg-white">
                        <h4 className="card-title m-b-0">Invoices</h4>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Client</th>
                                        <th>Due Date</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0001</Link></td>
                                        <td>
                                            <h2><a href="#">Hazel Nutt</a></h2>
                                        </td>
                                        <td>8 Aug 2017</td>
                                        <td>$380</td>
                                        <td>
                                            <span className="badge badge-warning-border">Partially Paid</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0002</Link></td>
                                        <td>
                                            <h2><a href="#">Paige Turner</a></h2>
                                        </td>
                                        <td>17 Sep 2017</td>
                                        <td>$500</td>
                                        <td>
                                            <span className="badge badge-success-border">Paid</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0003</Link></td>
                                        <td>
                                            <h2><a href="#">Ben Dover</a></h2>
                                        </td>
                                        <td>30 Nov 2017</td>
                                        <td>$60</td>
                                        <td>
                                            <span className="badge badge-danger-border">Unpaid</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <Link to="/admin/invoices" className="text-muted">View all invoices</Link>
                    </div>
                </div>
            </div>

        )
    }
}
