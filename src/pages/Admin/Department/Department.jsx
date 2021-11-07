import React, { Component } from 'react';
import $ from 'jquery';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';
import { connect } from 'react-redux';
class Department extends Component {
    componentDidMount() {
        if ($('.datatable').length > 0) {
            $('.datatable').DataTable({
                "bFilter": false,
            });
        };
        if ($('.table-responsive label select').length) {
            $('.table-responsive label select').addClass('custom-select custom-select-sm form-control form-control-sm')
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
            currentDepartment: {},
        };
    }

    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod,

        })
    }
    render() {
        let { departments} = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-5 col-5">
                        <h4 className="page-title">Department</h4>
                    </div>
                    <div className="col-sm-7 col-7 text-right m-b-30">
                        <a href="#" data-name='Add Department' onClick={this.showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_department"><i className="fa fa-plus" /> Add New Department</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0 datatable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Department Name</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {departments && departments.map((department,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{department.departmentName}</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit Department" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_department"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Department" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
        departments: state.infomations.departments,
    }
}
export default connect(mapStateToProps)(Department);
