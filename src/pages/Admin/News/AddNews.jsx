import React, { Component } from 'react';
import $ from 'jquery';

export default class AddNews extends Component {
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
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h4 className="page-title">Add News</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div className="form-group">
                                <label>News Name</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>News Images</label>
                                <div>
                                    <input className="form-control" type="file" />
                                    <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif,
                                        png. Maximum 10 images only.</small>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/blog/blog-thumb-01.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/placeholder-thumb.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/placeholder-thumb.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/placeholder-thumb.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/placeholder-thumb.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                            <img src="../assets/img/placeholder-thumb.jpg" className="img-thumbnail img-fluid" />
                                            <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group fix-select-form">
                                        <label>News Category</label>
                                        <select className="select">
                                            <option>Web Design</option>
                                            <option>Web Development</option>
                                            <option>App Development</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group fix-select-form">
                                        <label>News Sub Category</label>
                                        <select className="select">
                                            <option>Html</option>
                                            <option>Css</option>
                                            <option>Javascript</option>
                                            <option>PHP</option>
                                            <option>Codeignitor</option>
                                            <option>iOS</option>
                                            <option>Android</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>News Description</label>
                                <textarea cols={30} rows={6} className="form-control" defaultValue={""} />
                            </div>
                            <div className="form-group">
                                <label>Tags <small>(separated with a comma)</small></label>
                                <input type="text" placeholder="Enter your tags" data-role="tagsinput" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="display-block">News Status</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="blog_active" defaultValue="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="blog_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="blog_inactive" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="blog_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary btn-lg">Publish News</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
