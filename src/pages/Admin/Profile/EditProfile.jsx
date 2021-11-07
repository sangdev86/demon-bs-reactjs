import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; 
import DatePicker from "react-datepicker";
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            date: new Date(this.props.profile.birthDate),
        }
    }
    componentDidMount(){
        if ($('.floating').length > 0) {
            $('.floating').on('focus blur', function (e) {
                $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        };
        if ($('.select').length > 0) {
            $('.select').select2({
                minimumResultsForSearch: -1,
                width: '100%'
            });
        }
    }
    getDate=(date)=>{
        this.setState({date})
    }
    render() {
        let {profile} = this.props;
        return (
            <div className="content container-fluid" >
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Edit Profile</h4>
                    </div>
                </div>
                <form>
                    <div className="card-box">
                        <h3 className="card-title">Basic Informations</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-img-wrap">
                                    <img className="inline-block" src="../assets/img/user.jpg" alt="user" />
                                    <div className="fileupload btn">
                                        <span className="btn-text">edit</span>
                                        <input className="upload" type="file" />
                                    </div>
                                </div>
                                <div className="profile-basic">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">First Name</label>
                                                <input type="text" className="form-control floating" defaultValue={profile.firstName} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">Last Name</label>
                                                <input type="text" className="form-control floating" defaultValue={profile.lastName} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">Birth Date</label>
                                                <div className="cal-icon">
                                                    <DatePicker 
                                                    className="form-control floating" 
                                                    onChange={this.getDate} 
                                                    selected={this.state.date} 
                                                    disabledKeyboardNavigation
                                                    dateFormat="dd/MM/yyyy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-focus select-focus">
                                                <label className="focus-label">Gendar</label>
                                                <select defaultValue={profile.gendar} className="select form-control floating">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Contact Informations</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Address</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforContact.address} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">State</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforContact.city} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Country</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforContact.country} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Pin Code</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforContact.pinCode} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Phone Number</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforContact.numberPhone} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Education Informations</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Institution</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforEducation.institution} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Subject</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforEducation.subject} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Starting Date</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={this.getDate}
                                            selected={this.state.date}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Complete Date</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={this.getDate}
                                            selected={this.state.date}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Degree</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforEducation.degree} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Grade</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforEducation.grade} />
                                </div>
                            </div>
                        </div>
                        <div className="add-more">
                            <a href="#" className="btn btn-primary"><i className="fa fa-plus" /> Add More Institute</a>
                        </div>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Experience Informations</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Company Name</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforExperience.companyName} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Location</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforExperience.location} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Job Position</label>
                                    <input type="text" className="form-control floating" defaultValue={profile.inforExperience.jobPosition} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Period From</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={this.getDate}
                                            selected={this.state.date}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Period To</label>
                                    <div className="cal-icon">
                                        <DatePicker
                                            className="form-control floating"
                                            onChange={this.getDate}
                                            selected={this.state.date}
                                            disabledKeyboardNavigation
                                            dateFormat="dd/MM/yyyy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="add-more">
                            <a href="#" className="btn btn-primary"><i className="fa fa-plus" /> Add More Experience</a>
                        </div>
                    </div>
                    <div className="text-center m-t-20">
                        <button className="btn btn-primary btn-lg" type="button">Save Changes</button>
                    </div>
                </form>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.userReducer.profile,
    }
}
export default connect(mapStateToProps, null)(EditProfile);