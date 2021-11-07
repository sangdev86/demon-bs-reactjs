import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RightNews extends Component {
    render() {
        let {listNews} = this.props;
        return (
            <aside className="col-md-4">
                <div className="widget search-widget">
                    <h5>News Search</h5>
                    <form className="search-form">
                        <div className="input-group">
                            <input type="text" placeholder="Search..." className="form-control" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-search" /></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="widget post-widget">
                    <h5>Latest Posts</h5>
                    <ul className="latest-posts">
                        {listNews && listNews.map((news,index)=>{
                            return(
                                <li key={index}>
                                    <div className="post-thumb">
                                        <Link to="/admin/news-details">
                                            <img className="img-fluid" src={news.img} />
                                        </Link>
                                    </div>
                                    <div className="post-info">
                                        <h4>
                                            <Link to="/admin/news-details">{news.content.slice(0, 39)}</Link>
                                        </h4>
                                        <p><i aria-hidden="true" className="far fa-calendar-alt" />{news.createDate}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="widget category-widget">
                    <h5>News Categories</h5>
                    <ul className="categories">
                        {listNews && listNews.map((news, index) => {
                            return (
                                <li key={index}><a href="#."><i className="fas fa-long-arrow-alt-right" aria-hidden="true" /> Lorem
                            ipsum dolor</a></li>
                            )
                            })
                        }
                    </ul>
                </div>
                <div className="widget tags-widget">
                    <h5>Tags</h5>
                    <ul className="tags">
                        <li><a href="#." className="tag">Design</a></li>
                        <li><a href="#." className="tag">Devlopment</a></li>
                        <li><a href="#." className="tag">Kids</a></li>
                        <li><a href="#." className="tag">Family</a></li>
                        <li><a href="#." className="tag">App</a></li>
                        <li><a href="#." className="tag">Project</a></li>
                        <li><a href="#." className="tag">Client</a></li>
                        <li><a href="#." className="tag">Employee</a></li>
                        <li><a href="#." className="tag">Task</a></li>
                        <li><a href="#." className="tag">Product</a></li>
                        <li><a href="#." className="tag">Blog</a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        listNews: state.infomations.listNews,
    }
}
export default connect(mapStateToProps)(RightNews);