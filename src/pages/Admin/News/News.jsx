import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    render() {
        let {listNews} = this.props;
        return (
            <div className="content container-fluid">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-8 col-4">
                        <h4 className="page-title">News</h4>
                    </div>
                    <div className="col-sm-4 col-8 text-right m-b-30">
                        <a className="btn btn-primary btn-rounded float-right" href="#"data-name="Add News" onClick={this.showModal} data-toggle="modal" data-target="#add_new"><i className="fa fa-plus" /> Add News</a>
                    </div>
                </div>
                <div className="row">
                    {listNews && listNews.map((news,index)=>{
                        return( <div key={index} className="col-sm-6 col-md-6 col-lg-4">
                            <div className="blog grid-blog">
                                <div className="blog-image">
                                    <Link to="/admin/news-details"><img className="img-fluid" src={news.img} /></Link>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title"><Link to="/admin/news-details">{news.title}</Link></h3>
                                    <p>{news.content}</p>
                                    <Link to="/admin/news-details" className="read-more"><i className="fas fa-long-arrow-alt-right" aria-hidden="true" /> Read More</Link>
                                    <div className="blog-info clearfix">
                                        <div className="post-left">
                                            <ul>
                                                <li><a href="#."><i className="far fa-calendar-alt" /> <span>{news.createDate}</span></a></li>
                                            </ul>
                                        </div>
                                        <div className="post-right"><a href="#."><i className="far fa-heart" />{news.likes}</a> <a href="#."><i className="fa fa-eye" aria-hidden="true" />{news.views}</a> <a href="#."><i className="far fa-comment" />{news.comments}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        listNews: state.infomations.listNews,
    }
}
export default connect(mapStateToProps)(News);