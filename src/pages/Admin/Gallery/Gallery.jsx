import React, { Component } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgRotate from 'lightgallery/plugins/rotate';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgShare from 'lightgallery/plugins/share';


export default class Gallery extends Component {
    render() {
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Gallery</h4>
                    </div>
                </div>
                <div id="lightgallery" >
                    <LightGallery selector= 'a' plugins={[lgZoom, lgAutoplay, lgFullscreen, lgShare, lgThumbnail, lgRotate]} mode="lg-fade" className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-01.jpg'>
                        <a href="../assets/img/blog/blog-01.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-01.jpg" />
                        </a>
                    </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-02.jpg'>
                        <a href="../assets/img/blog/blog-02.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-02.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-03.jpg'>
                        <a href="../assets/img/blog/blog-03.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-03.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-04.jpg'>
                        <a href="../assets/img/blog/blog-04.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-04.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-01.jpg'>
                        <a href="../assets/img/blog/blog-01.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-01.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-02.jpg'>
                        <a href="../assets/img/blog/blog-02.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-02.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-03.jpg'>
                        <a href="../assets/img/blog/blog-03.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-03.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-04.jpg'>
                        <a href="../assets/img/blog/blog-04.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-04.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-01.jpg'>
                        <a href="../assets/img/blog/blog-01.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-01.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-02.jpg'>
                        <a href="../assets/img/blog/blog-02.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-02.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-03.jpg'>
                        <a href="../assets/img/blog/blog-03.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-03.jpg" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" data-src='../assets/img/blog/blog-04.jpg'>
                        <a href="../assets/img/blog/blog-04.jpg">
                            <img className="img-thumbnail" src="../assets/img/blog/blog-04.jpg" />
                        </a>
                    </div>
                    </LightGallery>
                 </div>
            </div>

        )
    }
}
