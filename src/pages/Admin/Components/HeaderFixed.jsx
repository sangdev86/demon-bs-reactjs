import React, { Component } from 'react'

export default class HeaderFixed extends Component {
    render() {
        return (
            <div className="fixed-header">
                <div className="row">
                    <div className="col-6">
                        <h4 className="page-title m-b-0 m-t-5">Contacts</h4>
                    </div>
                    <div className="col-6">
                        <div className="navbar justify-content-end">
                            <div className="search-box m-t-0">
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control" placeholder="Search" required />
                                    <span className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </div>
                            <ul className="nav float-right custom-menu">
                                <li className="nav-item dropdown dropdown-action">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Menu 1</a>
                                        <a className="dropdown-item" href="#">Menu 2</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
