import React, { Component } from 'react';
import $ from 'jquery';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';
import { connect } from 'react-redux';

class Holidays extends Component {
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
        let { holidays } = this.props;
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="row">
                    <div className="col-sm-5 col-5">
                        <h4 className="page-title">Holidays 2017</h4>
                    </div>
                    <div className="col-sm-7 col-7 text-right m-b-30">
                        <a href="#" data-name='Add Holiday' onClick={this.showModal} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_holiday"><i className="fa fa-plus" /> Add New Department</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title </th>
                                        <th>Holiday Date</th>
                                        <th>Day</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {holidays && holidays.map((holiday, index) => {
                                        return holiday.complete ? (
                                            <tr key={index} className="holiday-completed">
                                                <td>{index + 1}</td>
                                                <td>{holiday.title}</td>
                                                <td>{holiday.holidayDate}</td>
                                                <td>{holiday.day}</td>
                                                <td></td>
                                            </tr>
                                        ) :
                                        (
                                            <tr className="holiday-upcoming" key={index}>
                                                <td>{index + 1}</td>
                                                <td>{holiday.title}</td>
                                                <td>{holiday.holidayDate}</td>
                                                <td>{holiday.day}</td>
                                                <td className="text-right">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a data-name="Edit Holiday" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i className="fas fa-pen m-r-5" />
                                                                Edit</a>
                                                            <a data-name="Delete Holiday" onClick={this.showModal} className="dropdown-item" href="#" data-toggle="modal" data-target="#delete"><i className="far fa-trash-alt m-r-5" /> Delete</a>
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
        holidays: state.infomations.holidays,
    }
}
export default connect(mapStateToProps)(Holidays);