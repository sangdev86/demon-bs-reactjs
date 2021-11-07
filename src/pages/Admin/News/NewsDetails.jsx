import React, { Component } from 'react';
import RightNews from './RightNews';
import { connect } from 'react-redux';

class NewsDetails extends Component {
    render() {
        let{newsDetails} = this.props;
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">News Detail</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="blog-view">
                            <article className="blog blog-single-post">
                                <h3 className="blog-title">{newsDetails.title}</h3>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><a href="#."><i className="far fa-calendar-alt" /> <span>{newsDetails.createDate}</span></a></li>
                                            <li><a href="#."><i className="far fa-user" /> <span>By Andrew
                                                Dawis</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><a href="#."><i className="far fa-comment" />{`${newsDetails.comments} Comment`}</a>
                                    </div>
                                </div>
                                <div className="blog-image">
                                    <a href="#."><img src="../assets/img/blog/blog-01.jpg" className="img-fluid" /></a>
                                </div>
                                <div className="blog-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                        porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                        voluptas nulla pariatur?</p>
                                    <blockquote>
                                        <p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est
                                            at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                                            venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat
                                            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla
                                            non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
                                        </p>
                                    </blockquote>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                        rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                                        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                                        autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                                        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                                        rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                                        alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                </div>
                            </article>
                            <div className="widget blog-share clearfix">
                                <h3>Share the post</h3>
                                <ul className="social-share">
                                    <li><a href="#." title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#." title="Twitter"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#." title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
                                    <li><a href="#." title="Google Plus"><i className="fab fa-google-plus-g" /></a></li>
                                    <li><a href="#." title="Youtube"><i className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                            <div className="widget author-widget clearfix">
                                <h3>About author</h3>
                                <div className="about-author">
                                    <div className="about-author-img">
                                        <div className="author-img-wrap">
                                            <img className="img-fluid rounded-circle" src="../assets/img/user.jpg" />
                                        </div>
                                    </div>
                                    <div className="author-details">
                                        <span className="blog-author-name">Linda Barrett</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="widget blog-comments clearfix">
                                <h3>Comments (3)</h3>
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" src="../assets/img/user.jpg" />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Diana Bailey</span>
                                                    <span className="float-right">
                                                        <span className="blog-reply"><a href="#."><i className="fa fa-reply" /> Reply</a></span>
                                                    </span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                                    euismod odio, gravida pellentesque urna varius vitae, gravida
                                                    pellentesque urna varius vitae. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Nam viverra euismod odio, gravida
                                                    pellentesque urna varius vitae. Sed dui lorem, adipiscing in
                                                    adipiscing et, interdum nec metus. Mauris ultricies, justo eu
                                                    convallis placerat, felis enim ornare nisi, vitae mattis nulla ante
                                                    id dui.</p>
                                                <span className="blog-date">December 6, 2017</span>
                                            </div>
                                        </div>
                                        <ul className="comments-list reply">
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" src="../assets/img/user.jpg" />
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
                                                            <span className="blog-author-name">Henry Daniels</span>
                                                            <span className="float-right">
                                                                <span className="blog-reply"><a href="#."><i className="fa fa-reply" /> Reply</a></span>
                                                            </span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                            viverra euismod odio, gravida pellentesque urna varius
                                                            vitae, gravida pellentesque urna varius vitae.</p>
                                                        <span className="blog-date">December 6, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" src="../assets/img/user.jpg" />
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
                                                            <span className="blog-author-name">Diana Bailey</span>
                                                            <span className="float-right">
                                                                <span className="blog-reply"> <a href="#."><i className="fa fa-reply" /> Reply</a></span>
                                                            </span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                            viverra euismod odio, gravida pellentesque urna varius
                                                            vitae, gravida pellentesque urna varius vitae.</p>
                                                        <span className="blog-date">December 7, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" src="../assets/img/user.jpg" />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Marie Wells</span>
                                                    <span className="float-right">
                                                        <span className="blog-reply"><a href="#."><i className="fa fa-reply" /> Reply</a></span>
                                                    </span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <span className="blog-date">December 11, 2017</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" src="../assets/img/user.jpg" />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
                                                    <span className="blog-author-name">Pamela Curtis</span>
                                                    <span className="float-right">
                                                        <span className="blog-reply"><a href="#."><i className="fa fa-reply" /> Reply</a></span>
                                                    </span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <span className="blog-date">December 13, 2017</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget new-comment clearfix">
                                <h3>Leave Comment</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Name <span className="text-red">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Your email address <span className="text-red">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Comments</label>
                                                <textarea rows={4} className="form-control" defaultValue={""} />
                                            </div>
                                            <div className="comment-submit">
                                                <button type="submit" className="btn">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <RightNews />
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        newsDetails: state.infomations.newsDetails,
    }
}
export default connect(mapStateToProps)(NewsDetails);