import React, { Component } from "react";
import MessagesList from "../../../pages/Admin/Components/MessagesList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import ShowModal from "../../../classes/ShowModal";
import CustomModal from "../../../pages/Admin/Components/CustomModal";
import { openedTaskChat } from "../../../reducers/Actions/TaskChatActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class index extends Component {
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
			nameMod,
		});
	};

	componentDidUpdate() {
		if (this.state.id === "") return;
		let url =
			"http://localhost:3000" +
			this.props.location.pathname;
		let href = document.querySelector(
			`[data-name = "${this.state.nameMod}"] a`
		).href;
		if (url !== href) {
			this.setState({
				id: "",
				nameMod: "",
			});
			document.querySelector(".modal-backdrop").remove();
		}
	}
	render() {
		let { opened, dispatch } = this.props;

		return (
			<div className="main-wrapper">
				<Header />
				<LeftNav showModal={this.showModal} />
				<div className="page-wrapper">
					{this.props.children}
					<MessagesList />
					{this.state.id !== "" ? (
						<CustomModal
							cssModal={
								this.state.id != "create_project"
									? "modal-dialog-centered"
									: ""
							}
							fontSize={
								this.state.id != "create_project"
									? "font--size-23px"
									: ""
							}
							id={this.state.id}
							nameMod={this.state.nameMod}
						>
							<ShowModal id={this.state.id} />
						</CustomModal>
					) : (
						""
					)}
				</div>
				<div
					className={`sidebar-overlay ${
						opened ? "opened" : ""
					}`}
					data-reff
					onClick={() => dispatch(openedTaskChat(false))}
				/>
				<Footer />
			</div>
		);
	}
}
let mapStateToProps = (state) => {
	return {
		opened: state.tasksReducer.opened,
	};
};
export default withRouter(
	connect(mapStateToProps, null)(index)
);
