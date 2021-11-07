import React, { Component } from 'react'
import $ from 'jquery';

export default class Localization extends Component {
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
            <div className="content container-fluid" >
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <h3 className="page-title">Basic Settings</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group fix-select-form">
                                        <label>Default Country</label>
                                        <select defaultValue="United Kingdom" className="select form-control " >
                                            <option >USA</option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fix-select-form">
                                        <label>Date Format</label>
                                        <select defaultValue="d/m/Y" className="select form-control ">
                                            <option value="d/m/Y">15/05/2016</option>
                                            <option value="d.m.Y">15.05.2016</option>
                                            <option value="d-m-Y">15-05-2016</option>
                                            <option value="m/d/Y">05/15/2016</option>
                                            <option value="Y/m/d">2016/05/15</option>
                                            <option value="Y-m-d">2016-05-15</option>
                                            <option value="M d Y">May 15 2016</option>
                                            <option value="d M Y">15 May 2016</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fix-select-form">
                                        <label>Timezone</label>
                                        <select defaultValue="Antarctica/Palmer" className="select form-control ">
                                            <option>(UTC +5:30) Antarctica/Palmer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fix-select-form">
                                        <label>Default Language</label>
                                        <select defaultValue="French" className="select form-control ">
                                            <option>English</option>
                                            <option>French</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group fix-select-form">
                                        <label>Currency Code</label>
                                        <select defaultValue="USD" className="select form-control ">
                                            <option>USD</option>
                                            <option>Pound</option>
                                            <option>EURO</option>
                                            <option>Ringgit</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Currency Symbol</label>
                                        <input className="form-control" readOnly defaultValue="$" type="text" />
                                    </div>
                                </div>
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
