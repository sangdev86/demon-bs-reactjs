import React, { Component } from 'react'
import ShowModal from '../../../classes/ShowModal';
import CustomModal from '../Components/CustomModal';
import HeaderEmployees from '../Components/HeaderEmployees';
import { connect } from 'react-redux';
import $ from 'jquery';
class Attendance extends Component {
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
        return (
            <div className="content container-fluid" >
                <CustomModal id={this.state.id} nameMod={this.state.nameMod}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <HeaderEmployees showModal={this.showModal} act="Attendance" />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table m-b-0">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                        <th>8</th>
                                        <th>9</th>
                                        <th>10</th>
                                        <th>11</th>
                                        <th>12</th>
                                        <th>13</th>
                                        <th>14</th>
                                        <th>15</th>
                                        <th>16</th>
                                        <th>17</th>
                                        <th>18</th>
                                        <th>19</th>
                                        <th>20</th>
                                        <th>22</th>
                                        <th>23</th>
                                        <th>24</th>
                                        <th>25</th>
                                        <th>26</th>
                                        <th>27</th>
                                        <th>28</th>
                                        <th>29</th>
                                        <th>30</th>
                                        <th>31</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span className="first-off"><i
                                                className="fa fa-check text-success"></i></span> <span
                                                    className="first-off"><i className="fas fa-times text-danger"></i></span>
                                            </div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span className="first-off"><i
                                                className="fas fa-times text-danger"></i></span> <span
                                                    className="first-off"><i className="fa fa-check text-success"></i></span>
                                            </div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Richard Miles</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>John Smith</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Mike Litorus</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Wilmer Deluna</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffrey Warden</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Bernardo Galaviz</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Lesley Grauer</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Jeffery Lalor</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Loren Gatlin</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Tarah Shropshire</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Richard Miles</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fas fa-times text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
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
export default connect(mapStateToProps)(Attendance);