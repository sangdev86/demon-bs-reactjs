import React, { Component } from "react";
import RightTasks from "./RightTasks";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
	addTaskAction,
	checkTaskAction,
	deleteTaskAction,
} from "../../../reducers/Actions/ToDoListActions";
import CustomModal from "../Components/CustomModal";
import ShowModal from "../../../classes/ShowModal";
import { openedTaskChat } from "../../../reducers/Actions/TaskChatActions";
class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: false,
			valueTask: "",
			id: "",
			nameMod: "",
		};
	}
	handleChange = (e) => {
		this.setState({ valueTask: e.target.value });
	};
	showModal = (e) => {
		let id = e.currentTarget.dataset.target.slice(1);
		let nameMod = e.currentTarget.dataset.name;
		this.setState({
			id,
			nameMod,
		});
	};
	addNewTask = () => {
		let { valueTask } = this.state;
		let newTask = {
			id: Date.now(),
			content: valueTask,
			active: "inactive",
		};
		this.props.dispatch(addTaskAction(newTask));
		this.setState({ valueTask: "" });
	};
	activeTask = (task) => {
		let taskUpdate = task;
		taskUpdate.active =
			taskUpdate.active === "active"
				? "inactive"
				: "active";
		this.props.dispatch(checkTaskAction(taskUpdate));
	};
	deleteTask = (id) => {
		this.props.dispatch(deleteTaskAction(id));
	};
	showTaskChat = () => {
		let { opened } = this.props;
		// console.log("opened", opened);
		this.props.dispatch(openedTaskChat(!opened));
	};
	render() {
		let { tasks } = this.props;
		return (
			<div className="chat-main-row">
				<CustomModal
					id={this.state.id}
					nameMod={this.state.nameMod}
				>
					<ShowModal id={this.state.id} />
				</CustomModal>
				<div className="chat-main-wrapper">
					<div className="col-lg-7 message-view task-view task-left-sidebar">
						<div className="chat-window">
							<div className="fixed-header">
								<div className="navbar">
									<div className="float-left mr-auto">
										<div
											className="add-task-btn-wrapper"
											onClick={() => {
												this.setState({ isShow: true });
											}}
										>
											<span className="add-task-btn btn btn-white btn-sm">
												Add Task
											</span>
										</div>
									</div>
									<a
										className="task-chat profile-rightbar float-right"
										id="chat_icon"
										href="#chat_sidebar"
										onClick={this.showTaskChat}
									>
										<i className="fa fa fa-comment" />
									</a>
									<ul className="nav float-right custom-menu">
										<li className="nav-item dropdown dropdown-action">
											<a
												href="#"
												className="nav-link dropdown-toggle"
												data-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="fa fa-cog" />
											</a>
											<div className="dropdown-menu dropdown-menu-right">
												<a
													className="dropdown-item"
													href="#"
												>
													Pending Tasks
												</a>
												<a
													className="dropdown-item"
													href="#"
												>
													Completed Tasks
												</a>
												<a
													className="dropdown-item"
													href="#"
												>
													All Tasks
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="chat-contents">
								<div className="chat-content-wrap">
									<div className="chat-wrap-inner">
										<div className="chat-box">
											<div className="task-wrapper">
												<div className="task-list-container">
													<div className="task-list-body">
														<ul id="task-list">
															{tasks &&
																tasks.map((task, index) => {
																	return (
																		<li
																			key={index}
																			className={
																				task &&
																				task.active ===
																					"active"
																					? "task completed"
																					: "task"
																			}
																		>
																			<div className="task-container">
																				<span className="task-action-btn task-check">
																					<span
																						onClick={() =>
																							this.activeTask(
																								task
																							)
																						}
																						className="action-circle large complete-btn"
																						title={
																							task &&
																							task.active ===
																								"active"
																								? "Mark Incomplete"
																								: "Mark Complete"
																						}
																					>
																						<i className="material-icons">
																							check
																						</i>
																					</span>
																				</span>
																				<span className="task-label">
																					{task.content}
																				</span>
																				<span className="task-action-btn task-btn-right">
																					<span
																						className="action-circle large"
																						title="Assign"
																					>
																						<i className="material-icons">
																							person_add
																						</i>
																					</span>
																					<span
																						onClick={() =>
																							this.deleteTask(
																								task.id
																							)
																						}
																						className="action-circle large delete-btn"
																						title="Delete Task"
																					>
																						<i className="material-icons">
																							delete
																						</i>
																					</span>
																				</span>
																			</div>
																		</li>
																	);
																})}
														</ul>
													</div>
													<div className="task-list-footer">
														<div
															className={
																this.state.isShow
																	? "new-task-wrapper visible"
																	: "new-task-wrapper"
															}
														>
															<textarea
																name="task"
																onChange={this.handleChange}
																id="new-task"
																value={this.state.valueTask}
																placeholder="Enter new task here. . ."
															/>
															<span className="error-message hidden">
																You need to enter a task
																first
															</span>
															<span
																onClick={this.addNewTask}
																className="add-new-task-btn btn"
																id="add-task"
															>
																Add Task
															</span>
															<span
																onClick={() => {
																	this.setState({
																		isShow: false,
																	});
																}}
																className="cancel-btn btn"
																id="close-task-panel"
															>
																Close
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="notification-popup hide">
												<p>
													<span className="task" />
													<span className="notification-text" />
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RightTasks showModal={this.showModal} />
				</div>
			</div>
		);
	}
}
let mapStateToProps = (state) => {
	return {
		tasks: state.toDoList.tasks,
		opened: state.tasksReducer.opened,
	};
};
export default connect(mapStateToProps, null)(Tasks);
