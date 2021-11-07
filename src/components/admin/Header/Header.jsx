import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import Notifications from "./HeaderContents/Notifications";
export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-left">
					<a href="/admin" className="logo">
						<img
							src="../assets/img/logo-glinksolution.png"
							height={30}
							alt="logo"
						/>
					</a>
				</div>
				<div className="page-title-box float-left">
					<h3>Gmsadmin</h3>
				</div>
				<a
					id="mobile_btn"
					className="mobile_btn float-left"
					href="#sidebar"
				>
					<i className="fa fa-bars" aria-hidden="true" />
				</a>
				<ul>
					<Notifications />
				</ul>
				<div className="dropdown mobile-user-menu float-right">
					<a
						href="#"
						className="dropdown-toggle"
						data-toggle="dropdown"
						aria-expanded="false"
					>
						<i className="fa fa-ellipsis-v" />
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<NavLink
							className="dropdown-item"
							activeClassName="active"
							to="/admin/profile"
						>
							My Profile
						</NavLink>
						<NavLink
							className="dropdown-item"
							activeClassName="active"
							to="/admin/edit-profile"
						>
							Edit Profile
						</NavLink>
						<NavLink
							className="dropdown-item"
							activeClassName="active"
							to="/admin/settings"
						>
							Settings
						</NavLink>
						<NavLink
							className="dropdown-item"
							activeClassName="active"
							to="/admin/login"
						>
							Logout
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}
