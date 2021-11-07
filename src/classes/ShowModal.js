import React, { Component } from "react";
import DatePicker from "react-datepicker";
import $ from "jquery";

export default class ShowModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}
	getDate = (date) => {
		this.setState({
			date,
		});
	};
	renderModal = (idMod) => {
		switch (idMod) {
			case "add_roles":
				return (
					<form>
						<div className="form-group">
							<label>
								Role Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input className="form-control" type="text" />
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Role
							</button>
						</div>
					</form>
				);
			case "edit_roles":
				return (
					<form>
						<div className="form-group">
							<label>
								Role Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="Team Leader"
								type="text"
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "delete":
				return (
					<form>
						<div className="modal-body card-box">
							<p>Are you sure want to delete this?</p>
							<div className="m-t-20 text-left">
								<a
									href="#"
									className="btn btn-white mr-2"
									data-dismiss="modal"
								>
									Close
								</a>
								<button
									type="submit"
									className="btn btn-danger"
								>
									Delete
								</button>
							</div>
						</div>
					</form>
				);
			case "add_leavetype":
				return (
					<form>
						<div className="form-group">
							<label>
								Leave Type{" "}
								<span className="text-danger">*</span>
							</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>
								Number of days{" "}
								<span className="text-danger">*</span>
							</label>
							<input className="form-control" type="text" />
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Add Leave Type
							</button>
						</div>
					</form>
				);
			case "edit_leavetype":
				return (
					<form>
						<div className="form-group">
							<label>
								Leave Type{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="text"
								defaultValue="Casual Leave"
							/>
						</div>
						<div className="form-group">
							<label>
								Number of days{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								type="text"
								defaultValue={12}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_employee":
				return (
					<form className="m-b-70">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Last Name
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Password
									</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Confirm Password
									</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Employee ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Joining Date{" "}
										<span className="text-danger">*</span>
									</label>
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
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Phone{" "}
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Company
									</label>
									<select className="select">
										<option>select</option>
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Designation
									</label>
									<select className="select">
										<option>select</option>
										<option>Web Developer</option>
										<option>Web Designer</option>
										<option>SEO Analyst</option>
									</select>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Holidays</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Leave Request</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Clients</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Projects</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Chats</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Assets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Employee
							</button>
						</div>
					</form>
				);
			case "edit_employee":
				return (
					<form className="m-b-70">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="John"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Last Name
									</label>
									<input
										className="form-control"
										defaultValue="Doe"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="johndoe"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="johndoe@example.com"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Password
									</label>
									<input
										className="form-control"
										defaultValue="johndoe"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Confirm Password
									</label>
									<input
										className="form-control"
										defaultValue="johndoe"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Employee ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										defaultValue="FT-0001"
										readOnly
										className="form-control floating"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Joining Date{" "}
										<span className="text-danger">*</span>
									</label>
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
							<div className="col-sm-6">
								<div className="form-group">
									<label className="col-form-label">
										Phone{" "}
									</label>
									<input
										className="form-control"
										defaultValue={9876543210}
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Company
									</label>
									<select
										defaultValue="1"
										className="select"
									>
										<option value="1">
											Global Technologies
										</option>
										<option value="2">
											Delta Infotech
										</option>
										<option value="3">
											International Software Inc
										</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Designation
									</label>
									<select
										defaultValue="2"
										className="select"
									>
										<option value="1">Web Developer</option>
										<option value="2">Web Designer</option>
										<option value="3">SEO Analyst</option>
									</select>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Holidays</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Leave Request</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Clients</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Projects</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Chats</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Assets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
										<td className="text-center">
											<input type="checkbox" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_department":
				return (
					<form>
						<div className="form-group">
							<label>
								Department Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Department
							</button>
						</div>
					</form>
				);
			case "edit_department":
				return (
					<form>
						<div className="form-group">
							<label>
								Department Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="IT Management"
								type="text"
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_designation":
				return (
					<form>
						<div className="form-group">
							<label>
								Designation Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Designation
							</button>
						</div>
					</form>
				);
			case "edit_designation":
				return (
					<form>
						<div className="form-group">
							<label>
								Designation Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="Web Developer"
								type="text"
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Edit Designation
							</button>
						</div>
					</form>
				);
			case "add_holiday":
				return (
					<form>
						<div className="form-group">
							<label>
								Holiday Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Holiday Date{" "}
								<span className="text-danger">*</span>
							</label>
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
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Holiday
							</button>
						</div>
					</form>
				);
			case "edit_holiday":
				return (
					<form>
						<div className="form-group">
							<label>
								Holiday Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="New Year"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Holiday Date{" "}
								<span className="text-danger">*</span>
							</label>
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
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Edit Holiday
							</button>
						</div>
					</form>
				);
			case "add_leave":
				return (
					<form>
						<div className="form-group fix-select-form">
							<label>
								Leave Type{" "}
								<span className="text-danger">*</span>
							</label>
							<select className="select">
								<option>Select Leave Type</option>
								<option>Casual Leave 12 Days</option>
								<option>Medical Leave</option>
								<option>Loss of Pay</option>
							</select>
						</div>
						<div className="form-group">
							<label>
								From <span className="text-danger">*</span>
							</label>
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
						<div className="form-group">
							<label>
								To <span className="text-danger">*</span>
							</label>
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
						<div className="form-group">
							<label>
								Number of days{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								readOnly
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Remaining Leaves{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								readOnly
								defaultValue={12}
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Leave Reason{" "}
								<span className="text-danger">*</span>
							</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Send Leave Request
							</button>
						</div>
					</form>
				);
			case "edit_leave":
				return (
					<form>
						<div className="form-group fix-select-form">
							<label>
								Leave Type{" "}
								<span className="text-danger">*</span>
							</label>
							<select className="select">
								<option>Select Leave Type</option>
								<option>Casual Leave 12 Days</option>
							</select>
						</div>
						<div className="form-group">
							<label>
								From <span className="text-danger">*</span>
							</label>
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
						<div className="form-group">
							<label>
								To <span className="text-danger">*</span>
							</label>
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
						<div className="form-group">
							<label>
								Number of days{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								readOnly
								type="text"
								defaultValue={2}
							/>
						</div>
						<div className="form-group">
							<label>
								Remaining Leaves{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								readOnly
								defaultValue={12}
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Leave Reason{" "}
								<span className="text-danger">*</span>
							</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control"
								defaultValue={"Going to hospital"}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_user":
				return (
					<form className="m-b-30">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Phone </label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Role</label>
									<select className="select">
										<option>Admin</option>
										<option>Client</option>
										<option>Employee</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Company</label>
									<select className="select">
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Employee ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										className="form-control floating"
									/>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Employee</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Holidays</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Leave Request</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Events</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create User
							</button>
						</div>
					</form>
				);
			case "edit_user":
				return (
					<form className="m-b-30">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="John"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input
										className="form-control"
										defaultValue="Doe"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="johndoe"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="johndoe@example.com"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Phone </label>
									<input
										className="form-control"
										defaultValue={9876543210}
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Role
									</label>
									<select className="select">
										<option>Admin</option>
										<option>Client</option>
										<option>Employee</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label className="col-form-label">
										Company
									</label>
									<select className="select">
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Employee ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										defaultValue="FT-0001"
										className="form-control floating"
									/>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Employee</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Holidays</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Leave Request</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Events</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Edit User
							</button>
						</div>
					</form>
				);
			case "add_work_details":
				return (
					<form>
						<div className="form-group fix-select-form">
							<label>Project</label>
							<select className="select">
								<option>Office Management</option>
								<option>Project Management</option>
								<option>Video Calling App</option>
								<option>Hospital Administration</option>
							</select>
						</div>
						<div className="row">
							<div className="form-group col-sm-4">
								<label>
									Deadline{" "}
									<span className="text-danger">*</span>
								</label>
								<div className="cal-icon">
									<input
										className="form-control"
										type="text"
										defaultValue="5 Dec 2017"
										readOnly
									/>
								</div>
							</div>
							<div className="form-group col-sm-4">
								<label>
									Total Hours{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									type="text"
									defaultValue={100}
									readOnly
								/>
							</div>
							<div className="form-group col-sm-4">
								<label>
									Remaining Hours{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									type="text"
									defaultValue={60}
									readOnly
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group col-sm-6">
								<label>
									Date{" "}
									<span className="text-danger">*</span>
								</label>
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
							<div className="form-group col-sm-6">
								<label>
									Hours{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									type="text"
								/>
							</div>
						</div>
						<div className="form-group">
							<label>
								Description{" "}
								<span className="text-danger">*</span>
							</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save
							</button>
						</div>
					</form>
				);
			case "edit_work_details":
				return (
					<form>
						<div className="form-group fix-select-form">
							<label>
								Project{" "}
								<span className="text-danger">*</span>
							</label>
							<select className="select">
								<option>Office Management</option>
								<option>Project Management</option>
								<option>Video Calling App</option>
								<option>Hospital Administration</option>
							</select>
						</div>
						<div className="row">
							<div className="form-group col-sm-6">
								<label>
									Date{" "}
									<span className="text-danger">*</span>
								</label>
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
							<div className="form-group col-sm-6">
								<label>
									Hours{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									type="text"
									defaultValue={9}
								/>
							</div>
						</div>
						<div className="form-group">
							<label>
								Description{" "}
								<span className="text-danger">*</span>
							</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control"
								defaultValue={
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."
								}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "assignee":
				return (
					<>
						<div>
							<div className="input-group m-b-30">
								<input
									placeholder="Search to add"
									className="form-control search-input"
									type="text"
								/>
								<span className="input-group-append">
									<button className="btn btn-primary">
										Search
									</button>
								</span>
							</div>
							<div>
								<ul className="chat-user-list">
									<li>
										<a href="#">
											<div className="media">
												<span className="avatar">R</span>
												<div className="media-body align-self-center text-nowrap">
													<div className="user-name">
														Richard Miles
													</div>
													<span className="designation">
														Web Developer
													</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="media">
												<span className="avatar">J</span>
												<div className="media-body align-self-center text-nowrap">
													<div className="user-name">
														John Smith
													</div>
													<span className="designation">
														Android Developer
													</span>
												</div>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="media">
												<span className="avatar">
													<img
														src="assets/img/user.jpg"
														alt="John Doe"
													/>
												</span>
												<div className="media-body align-self-center text-nowrap">
													<div className="user-name">
														Jeffery Lalor
													</div>
													<span className="designation">
														Team Leader
													</span>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div className="m-t-50 text-center">
								<button className="btn btn-primary btn-lg">
									Assign
								</button>
							</div>
						</div>
					</>
				);
			case "task_followers":
				return (
					<div>
						<div className="input-group m-b-30">
							<input
								placeholder="Search to add"
								className="form-control search-input"
								id="btn-input"
								type="text"
							/>
							<span className="input-group-append">
								<button className="btn btn-primary">
									Search
								</button>
							</span>
						</div>
						<div>
							<ul className="chat-user-list">
								<li>
									<a href="#">
										<div className="media">
											<span className="avatar">J</span>
											<div className="media-body media-middle text-nowrap">
												<div className="user-name">
													Jeffery Lalor
												</div>
												<span className="designation">
													Team Leader
												</span>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div className="media">
											<span className="avatar">C</span>
											<div className="media-body media-middle text-nowrap">
												<div className="user-name">
													Catherine Manseau
												</div>
												<span className="designation">
													Android Developer
												</span>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div className="media">
											<span className="avatar">W</span>
											<div className="media-body media-middle text-nowrap">
												<div className="user-name">
													Wilmer Deluna
												</div>
												<span className="designation">
													Team Leader
												</span>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="m-t-50 text-center">
							<button className="btn btn-primary btn-lg">
								Add to Follow
							</button>
						</div>
					</div>
				);
			case "add_salary":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Select Staff</label>
									<select className="select">
										<option>John Doe</option>
										<option>Richard Miles</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<label>Net Salary</label>
								<input
									className="form-control"
									type="text"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<h4 className="text-primary">Earnings</h4>
								<div className="form-group">
									<label>Basic</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>DA(40%)</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>HRA(15%)</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Conveyance</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Allowance</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Medical Allowance</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Others</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<h4 className="text-primary">Deductions</h4>
								<div className="form-group">
									<label>TDS</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>ESI</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>PF</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Leave</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Prof. Tax</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Labour Welfare</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Fund</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
								<div className="form-group">
									<label>Others</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Salary
							</button>
						</div>
					</form>
				);
			case "edit_salary":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Select Staff</label>
									<select className="select">
										<option>John Doe</option>
										<option>Richard Miles</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<label>Net Salary</label>
								<input
									className="form-control"
									type="text"
									defaultValue="$4000"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<h4 className="text-primary">Earnings</h4>
								<div className="form-group">
									<label>Basic</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$6500"
									/>
								</div>
								<div className="form-group">
									<label>DA(40%)</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$2000"
									/>
								</div>
								<div className="form-group">
									<label>HRA(15%)</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$700"
									/>
								</div>
								<div className="form-group">
									<label>Conveyance</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$70"
									/>
								</div>
								<div className="form-group">
									<label>Allowance</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$30"
									/>
								</div>
								<div className="form-group">
									<label>Medical Allowance</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$20"
									/>
								</div>
								<div className="form-group">
									<label>Others</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<h4 className="text-primary">Deductions</h4>
								<div className="form-group">
									<label>TDS</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$300"
									/>
								</div>
								<div className="form-group">
									<label>ESI</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$20"
									/>
								</div>
								<div className="form-group">
									<label>PF</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$20"
									/>
								</div>
								<div className="form-group">
									<label>Leave</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$250"
									/>
								</div>
								<div className="form-group">
									<label>Prof. Tax</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$110"
									/>
								</div>
								<div className="form-group">
									<label>Labour Welfare</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$10"
									/>
								</div>
								<div className="form-group">
									<label>Fund</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$40"
									/>
								</div>
								<div className="form-group">
									<label>Others</label>
									<input
										className="form-control"
										type="text"
										defaultValue="$15"
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_expense":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Item Name</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Purchase From</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Purchase Date</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Purchased By </label>
									<select className="select">
										<option>Daniel Porter</option>
										<option>Roger Dixon</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Amount</label>
									<input
										placeholder="$50"
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Paid By</label>
									<select className="select">
										<option>Cash</option>
										<option>Cheque</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Status</label>
									<select className="select">
										<option>Pending</option>
										<option>Approved</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Attachments</label>
									<input
										className="form-control"
										type="file"
									/>
								</div>
							</div>
						</div>
						<div className="attach-files">
							<ul>
								<li>
									<img src="../assets/img/user.jpg" />
									<a
										href="#"
										className="fas fa-times file-remove"
									/>
								</li>
								<li>
									<img src="../assets/img/user.jpg" />
									<a
										href="#"
										className="fas fa-times file-remove"
									/>
								</li>
							</ul>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Expense
							</button>
						</div>
					</form>
				);
			case "edit_expense":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Item Name</label>
									<input
										className="form-control"
										defaultValue="Dell Laptop"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Purchase From</label>
									<input
										className="form-control"
										defaultValue="Amazon"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Purchase Date</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Purchased By </label>
									<select className="select">
										<option>Daniel Porter</option>
										<option>Roger Dixon</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Amount</label>
									<input
										placeholder="$50"
										className="form-control"
										defaultValue="$10000"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Paid By</label>
									<select className="select">
										<option>Cash</option>
										<option>Cheque</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Status</label>
									<select className="select ">
										<option>Pending</option>
										<option>Approved</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Attachments</label>
									<input
										className="form-control"
										type="file"
									/>
								</div>
							</div>
						</div>
						<div className="attach-files">
							<ul>
								<li>
									<img src="../assets/img/user.jpg" />
									<a
										href="#"
										className="fas fa-times file-remove"
									/>
								</li>
								<li>
									<img src="../assets/img/user.jpg" />
									<a
										href="#"
										className="fas fa-times file-remove"
									/>
								</li>
							</ul>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_pf":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Employee Name</label>
									<select className="select">
										<option value={3}>
											John Doe (FT-0001)
										</option>
										<option value={23}>
											Richard Miles (FT-0002)
										</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Provident Fund Type</label>
									<select className="form-control select">
										<option value="Fixed Amount">
											Fixed Amount
										</option>
										<option value="Percentage of Basic Salary">
											Percentage of Basic Salary
										</option>
									</select>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="show-fixed-amount">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<label>
													Employee Share (Amount)
												</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label>
													Organization Share (Amount)
												</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="show-basic-salary">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<label>Employee Share (%)</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label>
													Organization Share (%)
												</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<label>Description</label>
									<textarea
										className="form-control"
										rows={4}
										cols={50}
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save
							</button>
						</div>
					</form>
				);
			case "edit_pf":
				return (
					<form>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Employee Name</label>
									<select className="form-control select">
										<option value={3}>
											John Doe (FT-0001)
										</option>
										<option value={23}>
											Richard Miles (FT-0002)
										</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Provident Fund Type</label>
									<select className="form-control select">
										<option value="Fixed Amount">
											Fixed Amount
										</option>
										<option value="Percentage of Basic Salary">
											Percentage of Basic Salary
										</option>
									</select>
								</div>
							</div>
							<div className="col-md-12">
								<div className="show-fixed-amount">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>
													Employee Share (Amount)
												</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>
													Organization Share (Amount)
												</label>
												<input
													className="form-control"
													type="text"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="show-basic-salary">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Employee Share (%)</label>
												<input
													className="form-control"
													type="text"
													defaultValue="2%"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>
													Organization Share (%)
												</label>
												<input
													className="form-control"
													type="text"
													defaultValue="2%"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label>Description</label>
									<textarea
										className="form-control"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_tax":
				return (
					<form>
						<div className="form-group">
							<label>
								Tax Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Tax Percentage (%){" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="form-group fix-select-form">
							<label>
								Status{" "}
								<span className="text-danger">*</span>
							</label>
							<select className="select">
								<option>Pending</option>
								<option>Approved</option>
							</select>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Tax
							</button>
						</div>
					</form>
				);
			case "edit_tax":
				return (
					<form>
						<div className="form-group">
							<label>
								Tax Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="VAT"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Tax Percentage (%){" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								defaultValue="14%"
								required
								type="text"
							/>
						</div>
						<div className="form-group fix-select-form">
							<label>
								Status{" "}
								<span className="text-danger">*</span>
							</label>
							<select className="select">
								<option>Active</option>
								<option>Inactive</option>
							</select>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_client":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control floating"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										className="form-control"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Client ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control floating"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Phone </label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Company Name</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Projects</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Chat</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Estimates</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Invoices</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Client
							</button>
						</div>
					</form>
				);
			case "edit_client":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										First Name{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="Barry"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Last Name</label>
									<input
										className="form-control"
										defaultValue="Cuda"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Username{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control"
										defaultValue="barrycuda"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Email{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control floating"
										defaultValue="barrycuda@example.com"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Password</label>
									<input
										className="form-control"
										defaultValue="barrycuda"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										className="form-control"
										defaultValue="barrycuda"
										type="password"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>
										Client ID{" "}
										<span className="text-danger">*</span>
									</label>
									<input
										className="form-control floating"
										defaultValue="CLT-0001"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Phone </label>
									<input
										className="form-control"
										defaultValue={9876543210}
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Company Name</label>
									<input
										className="form-control"
										type="text"
										defaultValue="Global Technologies"
									/>
								</div>
							</div>
						</div>
						<div className="table-responsive m-t-15">
							<table className="table table-striped custom-table">
								<thead>
									<tr>
										<th>Module Permission</th>
										<th className="text-center">Read</th>
										<th className="text-center">Write</th>
										<th className="text-center">Create</th>
										<th className="text-center">Delete</th>
										<th className="text-center">Import</th>
										<th className="text-center">Export</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Projects</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Tasks</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Chat</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Estimates</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Invoices</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
									<tr>
										<td>Timing Sheets</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
										<td className="text-center">
											<input
												defaultChecked
												type="checkbox"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_group":
				return (
					<div>
						<p>
							Groups are where your team communicates.
							They’re best when organized around a topic —
							#leads, for example.
						</p>
						<form>
							<div className="form-group">
								<label>
									Group Name{" "}
									<span className="text-danger">*</span>
								</label>
								<input
									className="form-control"
									required
									type="text"
								/>
							</div>
							<div className="form-group">
								<label>
									Send invites to:{" "}
									<span className="text-muted-light">
										(optional)
									</span>
								</label>
								<input
									className="form-control"
									required
									type="text"
								/>
							</div>
							<div className="m-t-50 text-center">
								<button className="btn btn-primary btn-lg">
									Create Group
								</button>
							</div>
						</form>
					</div>
				);
			case "add_chat_user":
				return (
					<div>
						<div className="input-group m-b-30">
							<input
								placeholder="Search to start a chat"
								className="form-control search-input"
								id="btn-input"
								type="text"
							/>
							<span className="input-group-append">
								<button className="btn btn-primary">
									Search
								</button>
							</span>
						</div>
						<div>
							<h5>Recent Conversations</h5>
							<ul className="chat-user-list">
								<li>
									<a href="#">
										<div className="media">
											<span className="avatar align-self-center">
												J
											</span>
											<div className="media-body align-self-center text-nowrap">
												<div className="user-name">
													Jeffery Lalor
												</div>
												<span className="designation">
													Team Leader
												</span>
											</div>
											<div className="text-nowrap align-self-center">
												<div className="online-date">
													1 day ago
												</div>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div className="media ">
											<span className="avatar align-self-center">
												B
											</span>
											<div className="media-body align-self-center text-nowrap">
												<div className="user-name">
													Bernardo Galaviz
												</div>
												<span className="designation">
													Web Developer
												</span>
											</div>
											<div className="align-self-center text-nowrap">
												<div className="online-date">
													3 days ago
												</div>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div className="media">
											<span className="avatar align-self-center">
												<img
													src="assets/img/user.jpg"
													alt="John Doe"
												/>
											</span>
											<div className="media-body text-nowrap align-self-center">
												<div className="user-name">
													John Doe
												</div>
												<span className="designation">
													Web Designer
												</span>
											</div>
											<div className="align-self-center text-nowrap">
												<div className="online-date">
													7 months ago
												</div>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="m-t-50 text-center">
							<button className="btn btn-primary btn-lg">
								Create Group
							</button>
						</div>
					</div>
				);
			case "create_project":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Project Name</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Client</label>
									<select className="select">
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Start Date</label>
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
							<div className="col-sm-6">
								<div className="form-group">
									<label>End Date</label>
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
						</div>
						<div className="row">
							<div className="col-sm-3">
								<div className="form-group">
									<label>Rate</label>
									<input
										placeholder="$50"
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="form-group fix-select-form">
									<label>&nbsp;</label>
									<select className="select">
										<option>Hourly</option>
										<option>Fixed</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Priority</label>
									<select className="select">
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Project Leader</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Team Leader</label>
									<div className="project-members">
										<a
											href="#"
											data-toggle="tooltip"
											title="Jeffery Lalor"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Jeffery Lalor"
												height={20}
												width={20}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Team</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Team Members</label>
									<div className="project-members">
										<a
											href="#"
											data-toggle="tooltip"
											title="John Doe"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="John Doe"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="Richard Miles"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Richard Miles"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="John Smith"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="John Smith"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="Mike Litorus"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Mike Litorus"
												height={20}
												width={20}
											/>
										</a>
										<span className="all-team">+2</span>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control"
								placeholder="Enter your message here"
								defaultValue={""}
							/>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Project
							</button>
						</div>
					</form>
				);
			case "edit_project":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Project Name</label>
									<input
										className="form-control"
										defaultValue="Project Management"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Client</label>
									<select className="select">
										<option>Global Technologies</option>
										<option>Delta Infotech</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Start Date</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ to: date });
											}}
											onFocus={() => {
												this.setState({ to: new Date() });
											}}
											selected={this.state.to}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>End Date</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-3">
								<div className="form-group">
									<label>Rate</label>
									<input
										placeholder="$50"
										className="form-control"
										defaultValue="$5000"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="form-group fix-select-form">
									<label>&nbsp;</label>
									<select className="select">
										<option>Hourly</option>
										<option>Fixed</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Priority</label>
									<select className="select">
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Project Leader</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Team Leader</label>
									<div className="project-members">
										<a
											href="#"
											data-toggle="tooltip"
											title="Jeffery Lalor"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Jeffery Lalor"
												height={20}
												width={20}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Team</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Team Members</label>
									<div className="project-members">
										<a
											href="#"
											data-toggle="tooltip"
											title="John Doe"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="John Doe"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="Richard Miles"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Richard Miles"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="John Smith"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="John Smith"
												height={20}
												width={20}
											/>
										</a>
										<a
											href="#"
											data-toggle="tooltip"
											title="Mike Litorus"
										>
											<img
												src="../assets/img/user.jpg"
												className="avatar"
												alt="Mike Litorus"
												height={20}
												width={20}
											/>
										</a>
										<span className="all-team">+2</span>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea
								rows={4}
								cols={5}
								className="form-control summernote"
								placeholder="Enter your message here"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label>Upload Files</label>
							<input className="form-control" type="file" />
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_ticket":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Subject</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Id</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Assign Staff</label>
									<select className="select">
										<option>-</option>
										<option>Mike Litorus</option>
										<option>John Smith</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Client</label>
									<select className="select">
										<option>-</option>
										<option>Delta Infotech</option>
										<option>
											International Software Inc
										</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Priority</label>
									<select className="select">
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>CC</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Assign</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Assignee</label>
									<div className="project-members">
										<a
											title="John Smith"
											data-placement="top"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="John Smith"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Followers</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Followers</label>
									<div className="project-members">
										<a
											title="Richard Miles"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Richard Miles"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="John Smith"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="John Smith"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="Mike Litorus"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Mike Litorus"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="Wilmer Deluna"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Wilmer Deluna"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<span className="all-team">+2</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="form-group">
									<label>Description</label>
									<textarea
										className="form-control"
										defaultValue={""}
									/>
								</div>
								<div className="form-group">
									<label>Upload Files</label>
									<input
										className="form-control"
										type="file"
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Ticket
							</button>
						</div>
					</form>
				);
			case "edit_ticket":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Subject</label>
									<input
										className="form-control"
										type="text"
										defaultValue="Laptop Issue"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Id</label>
									<input
										className="form-control"
										type="text"
										readOnly
										defaultValue="TKT-0001"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Assign Staff</label>
									<select className="select">
										<option>-</option>
										<option>Mike Litorus</option>
										<option>John Smith</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Client</label>
									<select className="select">
										<option>-</option>
										<option>Delta Infotech</option>
										<option>
											International Software Inc
										</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group fix-select-form">
									<label>Priority</label>
									<select className="select">
										<option>High</option>
										<option>Medium</option>
										<option>Low</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>CC</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Assign</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Assignee</label>
									<div className="project-members">
										<a
											title="John Smith"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="John Smith"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Add Followers</label>
									<input
										type="text"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Ticket Followers</label>
									<div className="project-members">
										<a
											title="Richard Miles"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Richard Miles"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="John Smith"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="John Smith"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="Mike Litorus"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Mike Litorus"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<a
											title="Wilmer Deluna"
											data-toggle="tooltip"
											href="#"
										>
											<img
												width={20}
												height={20}
												alt="Wilmer Deluna"
												className="avatar"
												src="../assets/img/user.jpg"
											/>
										</a>
										<span className="all-team">+2</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="form-group">
									<label>Description</label>
									<textarea
										className="form-control"
										defaultValue={""}
									/>
								</div>
								<div className="form-group">
									<label>Upload Files</label>
									<input
										className="form-control"
										type="file"
									/>
								</div>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Edit Ticket
							</button>
						</div>
					</form>
				);
			case "edit-estimate":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Client{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Please Select</option>
										<option>Barry Cuda</option>
										<option>Tressa Wexler</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Project{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Select Project</option>
										<option>Office Management</option>
										<option>Project Management</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Email</label>
									<input
										className="form-control"
										type="email"
										defaultValue="barrycuda@example.com"
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>Tax</label>
									<select className="select">
										<option>Select Tax</option>
										<option>VAT</option>
										<option>GST</option>
										<option>No Tax</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Client Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={
											"5754 Airport Rd, Coosada, AL, 36020"
										}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Billing Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={
											"5754 Airport Rd, Coosada, AL, 36020"
										}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Estimate Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Expiry Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ to: date });
											}}
											onFocus={() => {
												this.setState({ to: new Date() });
											}}
											selected={this.state.to}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<thead>
											<tr>
												<th style={{ width: 20 }}>#</th>
												<th className="col-sm-2">Item</th>
												<th className="col-md-6">
													Description
												</th>
												<th style={{ width: 100 }}>
													Unit Cost
												</th>
												<th style={{ width: 80 }}>Qty</th>
												<th>Amount</th>
												<th />
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Vehicle Module"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Create, edit delete functionlity"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
														defaultValue={1}
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-success font-18"
														title="Add"
													>
														<i className="fa fa-plus" />
													</a>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Vehicle Module"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Create, edit delete functionlity"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
														defaultValue={1}
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-danger font-18"
														title="Remove"
													>
														<i
															className="far fa-trash-alt"
															aria-hidden="true"
														/>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td className="text-right">
													Total
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													112
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{ textAlign: "right" }}
												>
													Tax
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														readOnly
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{ textAlign: "right" }}
												>
													Discount %
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{
														textAlign: "right",
														fontWeight: "bold",
													}}
												>
													Grand Total
												</td>
												<td
													style={{
														textAlign: "right",
														fontWeight: "bold",
														fontSize: 16,
														width: 230,
													}}
												>
													$ 112
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label>Other Information</label>
											<textarea
												className="form-control"
												rows={4}
												defaultValue={""}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center m-t-20">
							<button className="btn btn-primary btn-lg">
								Save Estimate
							</button>
						</div>
					</form>
				);
			case "create-estimate":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Client{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Please Select</option>
										<option>Barry Cuda</option>
										<option>Tressa Wexler</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Project{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Select Project</option>
										<option>Office Management</option>
										<option>Project Management</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Email</label>
									<input
										className="form-control"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>Tax</label>
									<select className="select">
										<option>Select Tax</option>
										<option>VAT</option>
										<option>GST</option>
										<option>No Tax</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Client Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Billing Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Estimate Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Expiry Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ to: date });
											}}
											onFocus={() => {
												this.setState({ to: new Date() });
											}}
											selected={this.state.to}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<thead>
											<tr>
												<th style={{ width: 20 }}>#</th>
												<th className="col-sm-2">Item</th>
												<th className="col-md-6">
													Description
												</th>
												<th style={{ width: 100 }}>
													Unit Cost
												</th>
												<th style={{ width: 80 }}>Qty</th>
												<th>Amount</th>
												<th> </th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-success font-18"
														title="Add"
													>
														<i className="fa fa-plus" />
													</a>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-danger font-18"
														title="Remove"
													>
														<i
															className="far fa-trash-alt"
															aria-hidden="true"
														/>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td className="text-right">
													Total
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													0
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													className="text-right"
												>
													Tax
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														readOnly
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													className="text-right"
												>
													Discount %
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{
														textAlign: "right",
														fontWeight: "bold",
													}}
												>
													Grand Total
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														fontWeight: "bold",
														fontSize: 16,
														width: 230,
													}}
												>
													$ 0.00
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label>Other Information</label>
											<textarea
												className="form-control"
												rows={4}
												defaultValue={""}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center m-t-20">
							<button className="btn btn-primary btn-lg m-r-10">
								Save &amp; Send
							</button>
							<button className="btn btn-primary btn-lg">
								Save
							</button>
						</div>
					</form>
				);
			case "create-invoice":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Client{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Please Select</option>
										<option>Barry Cuda</option>
										<option>Tressa Wexler</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Project{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Select Project</option>
										<option>Office Management</option>
										<option>Project Management</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Email</label>
									<input
										className="form-control"
										type="email"
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>Tax</label>
									<select className="select">
										<option>Select Tax</option>
										<option>VAT</option>
										<option>GST</option>
										<option>No Tax</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Client Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Billing Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Invoice date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Due Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ to: date });
											}}
											onFocus={() => {
												this.setState({ to: new Date() });
											}}
											selected={this.state.to}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<thead>
											<tr>
												<th style={{ width: 20 }}>#</th>
												<th className="col-sm-2">Item</th>
												<th className="col-md-6">
													Description
												</th>
												<th style={{ width: 100 }}>
													Unit Cost
												</th>
												<th style={{ width: 80 }}>Qty</th>
												<th>Amount</th>
												<th> </th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-success font-18"
														title="Add"
													>
														<i className="fa fa-plus" />
													</a>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-danger font-18"
														title="Remove"
													>
														<i
															className="far fa-trash-alt"
															aria-hidden="true"
														/>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<tbody>
											<tr>
												<td />
												<td />
												<td />
												<td />
												<td className="text-right">
													Total
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													0
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													className="text-right"
												>
													Tax
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														readOnly
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													className="text-right"
												>
													Discount %
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{
														textAlign: "right",
														fontWeight: "bold",
													}}
												>
													Grand Total
												</td>
												<td
													style={{
														textAlign: "right",
														paddingRight: 30,
														fontWeight: "bold",
														fontSize: 16,
														width: 230,
													}}
												>
													$ 0.00
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label>Other Information</label>
											<textarea
												className="form-control"
												defaultValue={""}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center m-t-20">
							<button className="btn btn-primary btn-lg m-r-10">
								Save &amp; Send
							</button>
							<button className="btn btn-primary btn-lg">
								Save
							</button>
						</div>
					</form>
				);
			case "edit-invoice":
				return (
					<form>
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Client{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Please Select</option>
										<option>Barry Cuda</option>
										<option>Tressa Wexler</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>
										Project{" "}
										<span className="text-danger">*</span>
									</label>
									<select className="select">
										<option>Select Project</option>
										<option>Office Management</option>
										<option>Project Management</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Email</label>
									<input
										className="form-control"
										type="email"
										defaultValue="barrycuda@example.com"
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group fix-select-form">
									<label>Tax</label>
									<select className="select">
										<option>Select Tax</option>
										<option>VAT</option>
										<option>GST</option>
										<option>No Tax</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Client Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={
											"5754 Airport Rd, Coosada, AL, 36020"
										}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>Billing Address</label>
									<textarea
										className="form-control"
										rows={3}
										defaultValue={
											"5754 Airport Rd, Coosada, AL, 36020"
										}
									/>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Invoice date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ from: date });
											}}
											onFocus={() => {
												this.setState({ from: new Date() });
											}}
											selected={this.state.from}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="form-group">
									<label>
										Due Date{" "}
										<span className="text-danger">*</span>
									</label>
									<div className="cal-icon">
										<DatePicker
											className="form-control floating"
											onChange={(date) => {
												this.setState({ to: date });
											}}
											onFocus={() => {
												this.setState({ to: new Date() });
											}}
											selected={this.state.to}
											disabledKeyboardNavigation
											dateFormat="dd/MM/yyyy"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 col-sm-12">
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<thead>
											<tr>
												<th style={{ width: 20 }}>#</th>
												<th className="col-sm-2">Item</th>
												<th className="col-md-6">
													Description
												</th>
												<th style={{ width: 100 }}>
													Unit Cost
												</th>
												<th style={{ width: 80 }}>Qty</th>
												<th>Amount</th>
												<th />
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Vehicle Module"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Create, edit delete functionlity"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
														defaultValue={1}
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-success font-18"
														title="Add"
													>
														<i className="fa fa-plus" />
													</a>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Vehicle Module"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														type="text"
														defaultValue="Create, edit delete functionlity"
														style={{ minWidth: 150 }}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 100 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<input
														className="form-control"
														style={{ width: 80 }}
														type="text"
														defaultValue={1}
													/>
												</td>
												<td>
													<input
														className="form-control"
														readOnly
														style={{ width: 120 }}
														type="text"
														defaultValue={112}
													/>
												</td>
												<td>
													<a
														href="#"
														className="text-danger font-18"
														title="Remove"
													>
														<i
															className="far fa-trash-alt"
															aria-hidden="true"
														/>
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-white">
										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td className="text-right">
													Total
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													112
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{ textAlign: "right" }}
												>
													Tax
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														readOnly
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{ textAlign: "right" }}
												>
													Discount %
												</td>
												<td
													style={{
														textAlign: "right",
														width: 230,
													}}
												>
													<input
														className="form-control text-right"
														defaultValue={0}
														type="text"
													/>
												</td>
											</tr>
											<tr>
												<td
													colSpan={5}
													style={{
														textAlign: "right",
														fontWeight: "bold",
													}}
												>
													Grand Total
												</td>
												<td
													style={{
														textAlign: "right",
														fontWeight: "bold",
														fontSize: 16,
														width: 230,
													}}
												>
													$ 112
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label>Other Information</label>
											<textarea
												className="form-control"
												rows={4}
												defaultValue={""}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center m-t-20">
							<button className="btn btn-primary btn-lg">
								Save Invoice
							</button>
						</div>
					</form>
				);
			case "add-pricing":
				return (
					<form>
						<div className="form-group">
							<label>Pricing Name</label>
							<input
								className="form-control"
								type="text"
								placeholder="Free Trial"
							/>
						</div>
						<div className="form-group">
							<label>Pricing Amount</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>Pricing Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								Pricing Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="pricing_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="pricing_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="pricing_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="pricing_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Publish Pricing
							</button>
						</div>
					</form>
				);
			case "edit-pricing":
				return (
					<form>
						<div className="form-group">
							<label>Pricing Name</label>
							<input
								className="form-control"
								type="text"
								defaultValue="Free Trial"
							/>
						</div>
						<div className="form-group">
							<label>Pricing Amount</label>
							<input
								className="form-control"
								type="text"
								defaultValue="$500"
							/>
						</div>
						<div className="form-group">
							<label>Pricing Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								Pricing Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="pricing_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="pricing_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="pricing_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="pricing_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add-product":
				return (
					<form>
						<div className="form-group">
							<label>Product ID</label>
							<input
								className="form-control"
								type="text"
								defaultValue="PRO-0001"
								readOnly
							/>
						</div>
						<div className="form-group">
							<label>Product Name</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>Product Images</label>
							<div>
								<input
									className="form-control"
									type="file"
								/>
								<small className="form-text text-muted">
									Max. file size: 50 MB. Allowed images:
									jpg, gif, png. Maximum 10 images only.
								</small>
							</div>
							<div className="row">
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/product/product-thumb-01.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Product Category</label>
									<select className="select ">
										<option>Select</option>
										<option>Electronics</option>
										<option>Fashion</option>
										<option>Books</option>
										<option>Toys</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Product Sub Category</label>
									<select className="select ">
										<option>Select</option>
										<option>Televisions</option>
										<option>Headphones</option>
										<option>Clothing</option>
										<option>Shoes</option>
										<option>Toys &amp; Games</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Quantity</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Price</label>
									<input
										className="form-control"
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Product Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label>
								Product Tags{" "}
								<small>(separated with a comma)</small>
							</label>
							<input
								type="text"
								placeholder="Enter your tags"
								data-role="tagsinput"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								Product Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="product_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="product_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="product_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="product_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Publish Product
							</button>
						</div>
					</form>
				);
			case "edit-product":
				return (
					<form>
						<div className="form-group">
							<label>Product ID</label>
							<input
								className="form-control"
								type="text"
								defaultValue="PRO-0001"
								readOnly
							/>
						</div>
						<div className="form-group">
							<label>Product Name</label>
							<input
								className="form-control"
								type="text"
								defaultValue="Apple Macbook Air MQD42HN/A 13-inch Laptop"
							/>
						</div>
						<div className="form-group">
							<label>Product Images</label>
							<div>
								<input
									className="form-control"
									type="file"
								/>
								<small className="form-text text-muted">
									Max. file size: 50 MB. Allowed images:
									jpg, gif, png. Maximum 10 images only.
								</small>
							</div>
							<div className="row">
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/product/product-thumb-01.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Product Category</label>
									<select className="select ">
										<option>Select</option>
										<option>Electronics</option>
										<option>Fashion</option>
										<option>Books</option>
										<option>Toys</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>Product Sub Category</label>
									<select className="select ">
										<option>Select</option>
										<option>Televisions</option>
										<option>Headphones</option>
										<option>Clothing</option>
										<option>Shoes</option>
										<option>Toys &amp; Games</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Quantity</label>
									<input
										className="form-control"
										type="text"
										defaultValue={34}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Price</label>
									<input
										className="form-control"
										type="text"
										defaultValue={1918}
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Product Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label>
								Product Tags{" "}
								<small>(separated with a comma)</small>
							</label>
							<input
								type="text"
								placeholder="Enter your tags"
								data-role="tagsinput"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								Product Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="product_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="product_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="product_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="product_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_contact":
				return (
					<form>
						<div className="form-group">
							<label>Name</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>Email Address</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>Contact Number</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label className="display-block">
								Contact Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="contact_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="contact_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="contact_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="contact_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Add Contact
							</button>
						</div>
					</form>
				);
			case "add_new":
				return (
					<form>
						<div className="form-group">
							<label>News Name</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label>News Images</label>
							<div>
								<input
									className="form-control"
									type="file"
								/>
								<small className="form-text text-muted">
									Max. file size: 50 MB. Allowed images:
									jpg, gif, png. Maximum 10 images only.
								</small>
							</div>
							<div className="row">
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/blog/blog-thumb-01.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>News Category</label>
									<select className="select">
										<option>Web Design</option>
										<option>Web Development</option>
										<option>App Development</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>News Sub Category</label>
									<select className="select">
										<option>Html</option>
										<option>Css</option>
										<option>Javascript</option>
										<option>PHP</option>
										<option>Codeignitor</option>
										<option>iOS</option>
										<option>Android</option>
									</select>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>News Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label>
								Tags <small>(separated with a comma)</small>
							</label>
							<input
								type="text"
								placeholder="Enter your tags"
								data-role="tagsinput"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								News Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="blog_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="blog_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="blog_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="blog_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Publish News
							</button>
						</div>
					</form>
				);
			case "edit_new":
				return (
					<form>
						<div className="form-group">
							<label>News Name</label>
							<input
								className="form-control"
								type="text"
								defaultValue="Apple Macbook Air MQD42HN/A 13-inch Laptop"
							/>
						</div>
						<div className="form-group">
							<label>News Images</label>
							<div>
								<input
									className="form-control"
									type="file"
								/>
								<small className="form-text text-muted">
									Max. file size: 50 MB. Allowed images:
									jpg, gif, png. Maximum 10 images only.
								</small>
							</div>
							<div className="row">
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/blog/blog-thumb-01.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/blog/blog-thumb-02.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/blog/blog-thumb-03.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/blog/blog-thumb-04.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
									<div className="product-thumbnail">
										<img
											src="../assets/img/placeholder-thumb.jpg"
											className="img-thumbnail img-fluid"
										/>
										<span
											className="product-remove"
											title="remove"
										>
											<i className="fas fa-times" />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>News Category</label>
									<select className="select">
										<option>Web Design</option>
										<option>Web Development</option>
										<option>App Development</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group fix-select-form">
									<label>News Sub Category</label>
									<select className="select">
										<option>Html</option>
										<option>Css</option>
										<option>Javascript</option>
										<option>PHP</option>
										<option>Codeignitor</option>
										<option>iOS</option>
										<option>Android</option>
									</select>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>News Description</label>
							<textarea
								cols={30}
								rows={6}
								className="form-control"
								defaultValue={""}
							/>
						</div>
						<div className="form-group">
							<label>
								Tags <small>(separated with a comma)</small>
							</label>
							<input
								type="text"
								placeholder="Enter your tags"
								data-role="tagsinput"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="display-block">
								Blog Status
							</label>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="blog_active"
									defaultValue="option1"
									defaultChecked
								/>
								<label
									className="form-check-label"
									htmlFor="blog_active"
								>
									Active
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="status"
									id="blog_inactive"
									defaultValue="option2"
								/>
								<label
									className="form-check-label"
									htmlFor="blog_inactive"
								>
									Inactive
								</label>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Save Changes
							</button>
						</div>
					</form>
				);
			case "add_event":
				return (
					<form>
						<div className="form-group">
							<label>
								Event Name{" "}
								<span className="text-danger">*</span>
							</label>
							<input
								className="form-control"
								required
								type="text"
							/>
						</div>
						<div className="form-group">
							<label>
								Event Date{" "}
								<span className="text-danger">*</span>
							</label>
							<div className="cal-icon">
								<DatePicker
									className="form-control floating"
									onChange={(date) => {
										this.setState({ to: date });
									}}
									onFocus={() => {
										this.setState({ to: new Date() });
									}}
									selected={this.state.to}
									disabledKeyboardNavigation
									dateFormat="dd/MM/yyyy"
								/>
							</div>
						</div>
						<div className="m-t-20 text-center">
							<button className="btn btn-primary btn-lg">
								Create Event
							</button>
						</div>
					</form>
				);
			default:
				break;
		}
	};
	render() {
		setTimeout(() => {
			if ($(".floating").length > 0) {
				$(".floating")
					.on("focus blur", function (e) {
						$(this)
							.parents(".form-focus")
							.toggleClass(
								"focused",
								e.type === "focus" || this.value.length > 0
							);
					})
					.trigger("blur");
			}
			if ($(".select").length > 0) {
				$(".select").select2({
					minimumResultsForSearch: -1,
					width: "100%",
				});
			}
		}, 100);
		return <div>{this.renderModal(this.props.id)}</div>;
	}
}
