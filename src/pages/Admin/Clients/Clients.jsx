import React, { Component } from 'react'
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal'
class Clients extends Component {
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
        let { listUser, currentUser } = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Clients" />
                <div className="row staff-grid-row">
                    {
                        listUser && listUser.map((user, index) => {
                            if (currentUser.uid !== user.uid) {
                                return (
                                    <div key={index} className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                                        <div className="profile-widget">
                                            <div className="profile-img">
                                                <NavLink to="/admin/profile" className="avatar" >{user.uName.slice(0, 1)} </NavLink>
                                            </div>
                                            <div className="dropdown profile-action">
                                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a data-name="Edit Client" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fas fa-pen m-r-5" /> Edit</a>
                                                    <a data-name="Delete Client" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/admin/client-profile">Global
                                                Technologies</Link></h4>
                                            <h5 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/admin/client-profile">Barry
                                                Cuda</Link></h5>
                                            <div className="small text-muted">CEO</div>
                                            <Link to="/admin/chat" className="btn btn-white btn-sm mr-1 m-t-10">Message</Link>
                                            <Link to="/admin/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
        currentUser: state.userReducer.currentUser,
    }
}
export default connect(mapStateToProps)(Clients);