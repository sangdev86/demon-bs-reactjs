import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Payments extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card card-table card-table-top">
                    <div className="card-header bg-white">
                        <h4 className="card-title m-b-0">Payments</h4>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Client</th>
                                        <th>Payment Type</th>
                                        <th>Paid Date</th>
                                        <th>Paid Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0004</Link></td>
                                        <td>
                                            <h2><a href="#">Barry Cuda</a></h2>
                                        </td>
                                        <td>Paypal</td>
                                        <td>11 Jun 2017</td>
                                        <td>$380</td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0005</Link></td>
                                        <td>
                                            <h2><a href="#">Tressa Wexler</a></h2>
                                        </td>
                                        <td>Paypal</td>
                                        <td>21 Jul 2017</td>
                                        <td>$500</td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/admin/invoice-view">#INV-0006</Link></td>
                                        <td>
                                            <h2><a href="#">Ruby Bartlett</a></h2>
                                        </td>
                                        <td>Paypal</td>
                                        <td>28 Aug 2017</td>
                                        <td>$60</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <Link to="/admin/payments" className="text-muted">View all payments</Link>
                    </div>
                </div>
            </div>

        )
    }
}
