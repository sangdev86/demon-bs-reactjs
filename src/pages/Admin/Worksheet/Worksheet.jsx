import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';

class Worksheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    componentDidMount() {
        if ($('.datatable').length > 0) {
            $('.datatable').DataTable({
                "bFilter": false,
            });
        };
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        };
        if ($('.table-responsive label select').length) {
            $('.table-responsive label select').addClass('custom-select custom-select-sm form-control form-control-sm')
        }

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
        let { listUser } = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-5 col-5">
                        <h4 className="page-title">Timing Sheet</h4>
                    </div>
                    <div className="col-sm-7 col-7 text-right m-b-30">
                        <a href="#" data-name="Add Today Work details" onClick={this.showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_work_details"><i className="fa fa-plus" /> Add Today Work</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Date</th>
                                        <th>Projects</th>
                                        <th className="text-center">Assigned Hours</th>
                                        <th className="text-center">Hours</th>
                                        <th className="text-center">Description</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listUser && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Link to="/admin/profile" className="avatar">{user.uName.slice(0, 1)}</Link>
                                                    <h2><Link to="/admin/profile">{user.uName}<span>{user.designation}</span></Link></h2>
                                                </td>
                                                <td>5 Aug 2017</td>
                                                <td>Hospital Administration</td>
                                                <td>20</td>
                                                <td>12</td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.
                                                </td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit Work Details" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_work_details"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Work Details" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
    }
}
export default connect(mapStateToProps)(Worksheet);