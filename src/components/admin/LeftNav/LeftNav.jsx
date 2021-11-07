import React, { Component, useEffect } from "react";
import "./leftNav.css";
import SettingsNav from "./SettingsNav";
import DashboardNav from "./DashboardNav";
import TaskNav from "./TaskNav";
import ChatsNav from "./ChatsNav";
import { Capitalize } from "../../../classes/FormatSlug";
import $ from "jquery";
import { connect, useSelector } from "react-redux";
// import { withRouter } from "react-router-dom";

const LeftNav = ({ showModal }) => {
	const opened = useSelector(
		(state) => state.tasksReducer.opened
	);

	useEffect(() => {
		if ($(".sidebar-inner").length > 0) {
			window.$(".sidebar-inner").slimScroll({
				height: "100%",
			});
		}
	}, [window.location.pathname]);

	const renderSliderNav = () => {
		let titleName = window.location.pathname;
		if (titleName === "/admin") {
			document.title = "Dashboard";
		} else {
			let title = titleName.replace("/admin/", "");

			document.title = Capitalize(title);
		}

		switch (window.location.pathname) {
			case "/admin/settings":
			case "/admin/localization":
			case "/admin/email-settings":
			case "/admin/salary-settings":
			case "/admin/change-password":
			case "/admin/theme-settings":
			case "/admin/invoice-settings":
			case "/admin/notifications-settings":
			case "/admin/roles-permissions":
			case "/admin/leave-type":
				return <SettingsNav />;
			case "/admin/tasks":
				return <TaskNav showModal={showModal} />;
			case "/admin/chat":
			case "/admin/voice-call":
			case "/admin/video-call":
			case "/admin/Incoming-call":
				return <ChatsNav showModal={showModal} />;
			default:
				return <DashboardNav showModal={showModal} />;
		}
	};
	return (
		<div
			className={`sidebar ${opened ? "opened" : ""}`}
			id="sidebar"
		>
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">
					<div>{renderSliderNav()}</div>
				</div>
			</div>
		</div>
	);
};
export default LeftNav;

// class LeftNav extends Component {
// 	render() {
// 		let { opened, location } = this.props;
// 		const renderSliderNav = () => {
// 			let titleName = location.pathname;
// 			if (titleName === "/admin") {
// 				document.title = "Dashboard";
// 			} else {
// 				let title = titleName.replace("/admin/", "");

// 				document.title = Capitalize(title);
// 			}
// 			let { showModal } = this.props;
// 			switch (location.pathname) {
// 				case "/admin/settings":
// 				case "/admin/localization":
// 				case "/admin/email-settings":
// 				case "/admin/salary-settings":
// 				case "/admin/change-password":
// 				case "/admin/theme-settings":
// 				case "/admin/invoice-settings":
// 				case "/admin/notifications-settings":
// 				case "/admin/roles-permissions":
// 				case "/admin/leave-type":
// 					return <SettingsNav />;
// 				case "/admin/tasks":
// 					return <TaskNav showModal={showModal} />;
// 				case "/admin/chat":
// 				case "/admin/voice-call":
// 				case "/admin/video-call":
// 				case "/admin/Incoming-call":
// 					return <ChatsNav showModal={showModal} />;
// 				default:
// 					return <DashboardNav showModal={showModal} />;
// 			}
// 		};
// 		return (
// 			<div
// 				className={`sidebar ${opened ? "opened" : ""}`}
// 				id="sidebar"
// 			>
// 				<div className="sidebar-inner slimscroll">
// 					<div id="sidebar-menu" className="sidebar-menu">
// 						<div>{renderSliderNav()}</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// let mapStateToProps = (state) => {
// 	return {
// 		opened: state.tasksReducer.opened,
// 	};
// };
// export default withRouter(
// 	connect(mapStateToProps, null)(LeftNav)
// );
