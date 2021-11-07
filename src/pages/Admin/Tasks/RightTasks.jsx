import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RightTasks extends Component {
	render() {
		let { showModal, opened } = this.props;
		return (
			<div
				className={`col-lg-5 message-view task-chat-view task-right-sidebar ${
					opened ? "opened" : ""
				}`}
				id="chat_sidebar"
			>
				<div className="chat-window">
					<div className="fixed-header">
						<div className="navbar">
							<div className="task-assign">
								<span className="assign-title">
									Assigned to{" "}
								</span>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="bottom"
									title="John Doe"
								>
									<img
										src="../assets/img/user.jpg"
										className="avatar"
										height={20}
										width={20}
									/>
								</a>
								<a
									href="#"
									data-name="Assign to this task"
									onClick={showModal}
									className="followers-add"
									title="Add Assignee"
									data-toggle="modal"
									data-target="#assignee"
								>
									<i className="material-icons">add</i>
								</a>
							</div>
							<ul className="nav float-right custom-menu">
								<li className="dropdown dropdown-action">
									<a
										href="#"
										className="dropdown-toggle"
										data-toggle="dropdown"
										aria-expanded="false"
									>
										<i className="fa fa-ellipsis-v" />
									</a>
									<div className="dropdown-menu">
										<a className="dropdown-item" href="#">
											Delete Task
										</a>
										<a className="dropdown-item" href="#">
											Settings
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="chat-contents task-chat-contents">
						<div className="chat-content-wrap">
							<div className="chat-wrap-inner">
								<div className="chat-box">
									<div className="chats">
										<h4>Hospital Administration Phase 1</h4>
										<hr className="task-line" />
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													Lesley Grauer
												</a>{" "}
												<span className="task-info-subject">
													created task
												</span>
											</span>
											<div className="task-time">
												Jan 26, 2015
											</div>
										</div>
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													Lesley Grauer
												</a>{" "}
												<span className="task-info-subject">
													added to Hospital Administration
												</span>
											</span>
											<div className="task-time">
												Jan 26, 2015
											</div>
										</div>
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													Lesley Grauer
												</a>{" "}
												<span className="task-info-subject">
													assigned to John Doe
												</span>
											</span>
											<div className="task-time">
												Jan 26, 2015
											</div>
										</div>
										<hr className="task-line" />
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													John Doe
												</a>{" "}
												<span className="task-info-subject">
													changed the due date to Sep 28
												</span>{" "}
											</span>
											<div className="task-time">
												9:09pm
											</div>
										</div>
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													John Doe
												</a>{" "}
												<span className="task-info-subject">
													assigned to you
												</span>
											</span>
											<div className="task-time">
												9:10pm
											</div>
										</div>
										<div className="chat chat-left">
											<div className="chat-avatar">
												<Link
													to="/admin/profile"
													className="avatar"
												>
													<img
														alt="John Doe"
														src="../assets/img/user.jpg"
														className="img-fluid rounded-circle"
													/>
												</Link>
											</div>
											<div className="chat-body">
												<div className="chat-bubble">
													<div className="chat-content">
														<span className="task-chat-user">
															John Doe
														</span>{" "}
														<span className="chat-time">
															8:35 am
														</span>
														<p>I'm just looking around.</p>
														<p>
															Will you tell me something
															about yourself?{" "}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="completed-task-msg">
											<span className="task-success">
												<a href="#">John Doe</a> completed
												this task.
											</span>{" "}
											<span className="task-time">
												Today at 9:27am
											</span>
										</div>
										<div className="chat chat-left">
											<div className="chat-avatar">
												<Link
													to="/admin/profile"
													className="avatar"
												>
													<img
														alt="John Doe"
														src="../assets/img/user.jpg"
														className="img-fluid rounded-circle"
													/>
												</Link>
											</div>
											<div className="chat-body">
												<div className="chat-bubble">
													<div className="chat-content">
														<span className="task-chat-user">
															John Doe
														</span>{" "}
														<span className="file-attached">
															attached 3 files{" "}
															<i
																className="fa fa-paperclip"
																aria-hidden="true"
															/>
														</span>{" "}
														<span className="chat-time">
															Dec 17, 2014 at 4:32am
														</span>
														<ul className="attach-list">
															<li>
																<i className="fa fa-file" />{" "}
																<a href="#">
																	project_document.avi
																</a>
															</li>
															<li>
																<i className="fa fa-file" />{" "}
																<a href="#">
																	video_conferencing.psd
																</a>
															</li>
															<li>
																<i className="fa fa-file" />{" "}
																<a href="#">
																	landing_page.psd
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="chat chat-left">
											<div className="chat-avatar">
												<Link
													to="/admin/profile"
													className="avatar"
												>
													<img
														alt="John Doe"
														src="../assets/img/user.jpg"
														className="img-fluid rounded-circle"
													/>
												</Link>
											</div>
											<div className="chat-body">
												<div className="chat-bubble">
													<div className="chat-content">
														<span className="task-chat-user">
															Jeffery Lalor
														</span>{" "}
														<span className="file-attached">
															attached file{" "}
															<i
																className="fa fa-paperclip"
																aria-hidden="true"
															/>
														</span>{" "}
														<span className="chat-time">
															Yesterday at 9:16pm
														</span>
														<ul className="attach-list">
															<li className="pdf-file">
																<i className="far fa-file-pdf" />
																<a href="#">
																	Document_2016.pdf
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="chat chat-left">
											<div className="chat-avatar">
												<Link
													to="/admin/profile"
													className="avatar"
												>
													<img
														alt="John Doe"
														src="../assets/img/user.jpg"
														className="img-fluid rounded-circle"
													/>
												</Link>
											</div>
											<div className="chat-body">
												<div className="chat-bubble">
													<div className="chat-content">
														<span className="task-chat-user">
															Jeffery Lalor
														</span>{" "}
														<span className="file-attached">
															attached file{" "}
															<i
																className="fa fa-paperclip"
																aria-hidden="true"
															/>
														</span>{" "}
														<span className="chat-time">
															Today at 12:42pm
														</span>
														<ul className="attach-list">
															<li className="img-file">
																<div className="attach-img-download">
																	<a href="#">
																		avatar-1.jpg
																	</a>
																</div>
																<div className="task-attach-img">
																	<img src="../assets/img/user.jpg" />
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="task-information">
											<span className="task-info-line">
												<a className="task-user" href="#">
													John Doe
												</a>{" "}
												<span className="task-info-subject">
													marked task as incomplete
												</span>
											</span>
											<div className="task-time">
												1:16pm
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="chat-footer">
						<div className="message-bar">
							<div className="message-inner">
								<a className="link attach-icon" href="#">
									<img src="../assets/img/attachment.png" />
								</a>
								<div className="message-area">
									<div className="input-group">
										<textarea
											className="form-control"
											placeholder="Type message..."
											defaultValue={""}
										/>
										<span className="input-group-append">
											<button
												className="btn btn-primary"
												type="button"
											>
												<i className="fas fa-paper-plane" />
											</button>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="project-members task-followers">
							<span className="followers-title">
								Followers
							</span>
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
							<a
								href="#"
								data-name="Add followers to this task"
								onClick={showModal}
								className="followers-add"
								data-toggle="modal"
								data-target="#task_followers"
							>
								<i className="material-icons">add</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
let mapStateToProps = (state) => {
	return {
		opened: state.tasksReducer.opened,
	};
};
export default connect(mapStateToProps, null)(RightTasks);
