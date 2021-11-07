import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MainNavRender } from "./MainNavRender";

export default class MainNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: true,
			isShowArr: [true, true, true],
		};
	}

	showDropdown = (e) => {
		e.preventDefault();
		let isShow = this.state.isShow;
		e.currentTarget.className = isShow ? "subdrop" : "";
		e.currentTarget.nextElementSibling.style.display =
			isShow ? "block" : "none";
		this.setState({ isShow: !isShow });
	};

	showDropdownUpdate = (e, index) => {
		e.preventDefault();
		let isShowArr = this.state.isShowArr;
		e.currentTarget.className = isShowArr[index]
			? "subdrop"
			: "";
		e.currentTarget.nextElementSibling.style.display =
			isShowArr[index] ? "block" : "none";
		let updateState = [...this.state.isShowArr];
		let check = true;
		updateState.forEach((item) => {
			if (item === false) {
				check = false;
				return check;
			}
		});
		if (check) {
			updateState[index] = !updateState[index];
		} else {
			for (let i = 0; i < updateState.length; i++) {
				if (i !== index) {
					updateState[i] = true;
				}
			}
			updateState[index] = !updateState[index];
		}

		this.setState({ isShowArr: [...updateState] });
	};
	renderSubmenu = () => {
		let { isShowArr } = this.state;
		let { showModal } = this.props;
		return MainNavRender.map((item, index) => {
			if (item.type === "submenu") {
				return (
					<li className="submenu" key={index}>
						<a
							onClick={(e) =>
								this.showDropdownUpdate(e, item.index)
							}
							href="#"
						>
							<i className={item.icon} />
							<span> {item.name}</span>
							<span
								className="menu-arrow"
								style={{
									transform: isShowArr[item.index]
										? "rotate(0deg)"
										: "rotate(90deg)",
								}}
							/>
						</a>
						<ul
							className="list-unstyled"
							style={{
								display: isShowArr[item.index]
									? "none"
									: "block",
							}}
						>
							{item.lists.map((list, index) => {
								return !list.showModal ? (
									<li key={index}>
										<NavLink
											activeClassName="active"
											to={list.path}
										>
											{list.name}
										</NavLink>
									</li>
								) : (
									<li
										data-name={list.dataName}
										data-toggle="modal"
										data-target={list.dataTarget}
										onClick={showModal}
										key={index}
									>
										<NavLink
											activeClassName="active"
											to={list.path}
										>
											{list.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</li>
				);
			} else {
				return (
					<li className="toggle-sidebar" key={index}>
						<NavLink
							exact={item.exact}
							to={item.path}
							activeClassName="active"
						>
							<i className={item.icon} />

							{item.name}
							{item.notification ? (
								<span className="badge badge-pill bg-primary float-right">
									5
								</span>
							) : (
								""
							)}
						</NavLink>
					</li>
				);
			}
		});
	};
	render() {
		return (
			<ul>
				<li className="menu-title">Main</li>
				{this.renderSubmenu()}
			</ul>
		);
	}

	// render() {
	// 	let { showModal } = this.props;
	// 	return (
	// 		<ul>
	// 			<li className="menu-title">Main</li>
	// 			<li>
	// 				<NavLink
	// 					exact
	// 					to="/admin"
	// 					activeClassName="active"
	// 				>
	// 					<i className="fas fa-tachometer-alt" />{" "}
	// 					Dashboard{" "}
	// 				</NavLink>
	// 			</li>
	// 			<li>
	// 				<NavLink
	// 					to="/admin/chat"
	// 					activeClassName="active"
	// 				>
	// 					<i
	// 						className="fa fa-comments"
	// 						aria-hidden="true"
	// 					/>{" "}
	// 					Chat{" "}
	// 					<span className="badge badge-pill bg-primary float-right">
	// 						5
	// 					</span>
	// 				</NavLink>
	// 			</li>
	// 			<li className="submenu">
	// 				<a onClick={this.showDropdown} href="#">
	// 					<i className="fas fa-video" />{" "}
	// 					<span> Calls</span>{" "}
	// 					<span className="menu-arrow" />
	// 				</a>
	// 				<ul
	// 					className="list-unstyled"
	// 					style={{ display: "none" }}
	// 				>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/voice-call"
	// 						>
	// 							Voice Call
	// 						</NavLink>
	// 					</li>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/video-call"
	// 						>
	// 							Video Call
	// 						</NavLink>
	// 					</li>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/incoming-call"
	// 						>
	// 							Incoming Call
	// 						</NavLink>
	// 					</li>
	// 				</ul>
	// 			</li>
	// 			<li className="submenu">
	// 				<a onClick={this.showDropdown} href="#">
	// 					<i
	// 						className="fa fa-envelope"
	// 						aria-hidden="true"
	// 					/>{" "}
	// 					<span> Email</span>{" "}
	// 					<span className="menu-arrow" />
	// 				</a>
	// 				<ul
	// 					className="list-unstyled"
	// 					style={{ display: "none" }}
	// 				>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/compose"
	// 						>
	// 							Compose Mail
	// 						</NavLink>
	// 					</li>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/inbox"
	// 						>
	// 							Inbox
	// 						</NavLink>
	// 					</li>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/mail-view"
	// 						>
	// 							Mail View
	// 						</NavLink>
	// 					</li>
	// 				</ul>
	// 			</li>
	// 			<li>
	// 				<NavLink
	// 					activeClassName="active"
	// 					to="/admin/contacts"
	// 				>
	// 					<i
	// 						className="fa fa-address-card"
	// 						aria-hidden="true"
	// 					/>{" "}
	// 					Contacts
	// 				</NavLink>
	// 			</li>
	// 			<li>
	// 				<NavLink
	// 					activeClassName="active"
	// 					to="/admin/tasks"
	// 				>
	// 					<i className="fa fa-tasks" aria-hidden="true" />{" "}
	// 					Tasks
	// 				</NavLink>
	// 			</li>
	// 			<li className="submenu">
	// 				<a onClick={this.showDropdown} href="#">
	// 					<i className="far fa-comment-dots" />{" "}
	// 					<span> News</span>{" "}
	// 					<span className="menu-arrow" />
	// 				</a>
	// 				<ul
	// 					className="list-unstyled"
	// 					style={{ display: "none" }}
	// 				>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/news"
	// 						>
	// 							News
	// 						</NavLink>
	// 					</li>
	// 					<li>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/news-details"
	// 						>
	// 							News Details
	// 						</NavLink>
	// 					</li>
	// 					<li
	// 						data-name="Add New"
	// 						data-toggle="modal"
	// 						data-target="#add_new"
	// 						onClick={showModal}
	// 					>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/add-news"
	// 						>
	// 							Add News
	// 						</NavLink>
	// 					</li>
	// 					<li
	// 						data-name="Edit New"
	// 						data-toggle="modal"
	// 						data-target="#edit_new"
	// 						onClick={showModal}
	// 					>
	// 						<NavLink
	// 							activeClassName="active"
	// 							to="/admin/edit-news"
	// 						>
	// 							Edit News
	// 						</NavLink>
	// 					</li>
	// 				</ul>
	// 			</li>
	// 			<li>
	// 				<NavLink to="/admin/tickets">
	// 					<i className="fas fa-ticket-alt" /> Tickets{" "}
	// 				</NavLink>
	// 			</li>
	// 			<li>
	// 				<NavLink to="/admin/settings">
	// 					<i className="fa fa-cog" aria-hidden="true" />{" "}
	// 					Settings
	// 				</NavLink>
	// 			</li>
	// 		</ul>
	// 	);
	// }
}
