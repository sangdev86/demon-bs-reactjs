import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightChat from "./RightChat";
export default class Chat extends Component {
	render() {
		return (
			<div className="chat-main-row">
				<div className="chat-main-wrapper">
					<div className="col-lg-9 message-view task-view">
						<div className="chat-window">
							<div className="fixed-header">
								<div className="navbar">
									<div className="user-details mr-auto">
										<div className="float-left user-img m-r-10">
											<Link
												to="/admin/profile"
												title="Mike Litorus"
											>
												<img
													src="../assets/img/user.jpg"
													className="w-40 rounded-circle"
												/>
												<span className="status online" />
											</Link>
										</div>
										<div className="user-info float-left">
											<Link
												to="/admin/profile"
												title="Mike Litorus"
											>
												<span className="font-bold">
													Mike Litorus
												</span>{" "}
												<i className="typing-text">
													Typing...
												</i>
											</Link>
											<span className="last-seen">
												Last seen today at 7:50 AM
											</span>
										</div>
									</div>
									<div className="search-box">
										<div className="input-group input-group-sm">
											<input
												type="text"
												className="form-control"
												placeholder="Search"
												required
											/>
											<span className="input-group-append">
												<button
													className="btn"
													type="button"
												>
													<i className="fa fa-search" />
												</button>
											</span>
										</div>
									</div>
									<ul className="nav custom-menu">
										<li className="nav-item">
											<a
												id="chat_icon"
												href="#chat_sidebar"
												className="nav-link task-chat profile-rightbar float-right"
											>
												<i
													className="fa fa-user"
													aria-hidden="true"
												/>
											</a>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="/admin/voice-call"
											>
												<i className="fas fa-phone-alt" />
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="/admin/video-call"
											>
												<i className="fas fa-video" />
											</Link>
										</li>
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
													Delete Conversations
												</a>
												<a
													className="dropdown-item"
													href="#"
												>
													Settings
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
											<div className="chats">
												<div className="chat chat-right">
													<div className="chat-body">
														<div className="chat-bubble">
															<div className="chat-content">
																<p>
																	Hello. What can I do for
																	you?
																</p>
																<span className="chat-time">
																	8:30 am
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="chat-line">
													<span className="chat-date">
														October 8th, 2015
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
																<p>
																	I'm just looking around.
																</p>
																<p>
																	Will you tell me something
																	about yourself?{" "}
																</p>
																<span className="chat-time">
																	8:35 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>
																	Are you there? That time!
																</p>
																<span className="chat-time">
																	8:40 am
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="chat chat-right">
													<div className="chat-body">
														<div className="chat-bubble">
															<div className="chat-content">
																<p>Where?</p>
																<span className="chat-time">
																	8:35 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>
																	OK, my name is
																	Limingqiang. I like
																	singing, playing
																	basketballand so on.
																</p>
																<span className="chat-time">
																	8:42 am
																</span>
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
																<p>You wait for notice.</p>
																<span className="chat-time">
																	8:30 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>
																	Consectetuorem ipsum dolor
																	sit?
																</p>
																<span className="chat-time">
																	8:50 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>OK?</p>
																<span className="chat-time">
																	8:55 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content img-content">
																<div className="chat-img-group clearfix">
																	<p>Uploaded 3 Images</p>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																</div>
																<span className="chat-time">
																	9:00 am
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="chat chat-right">
													<div className="chat-body">
														<div className="chat-bubble">
															<div className="chat-content">
																<p>OK!</p>
																<span className="chat-time">
																	9:00 am
																</span>
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
																<p>Uploaded 3 files</p>
																<ul className="attach-list">
																	<li>
																		<i className="fa fa-file" />{" "}
																		<a href="#">
																			example.avi
																		</a>
																	</li>
																	<li>
																		<i className="fa fa-file" />{" "}
																		<a href="#">
																			activity.psd
																		</a>
																	</li>
																	<li>
																		<i className="fa fa-file" />{" "}
																		<a href="#">
																			example.psd
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>
																	Consectetuorem ipsum dolor
																	sit?
																</p>
																<span className="chat-time">
																	8:50 am
																</span>
															</div>
														</div>
														<div className="chat-bubble">
															<div className="chat-content">
																<p>OK?</p>
																<span className="chat-time">
																	8:55 am
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="chat chat-right">
													<div className="chat-body">
														<div className="chat-bubble">
															<div className="chat-content img-content">
																<div className="chat-img-group clearfix">
																	<p>Uploaded 6 Images</p>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																	<a
																		className="chat-img-attach"
																		href="#"
																	>
																		<img
																			width={182}
																			height={137}
																			src="../assets/img/placeholder.jpg"
																		/>
																		<div className="chat-placeholder">
																			<div className="chat-img-name">
																				placeholder.jpg
																			</div>
																			<div className="chat-file-desc">
																				842 KB
																			</div>
																		</div>
																	</a>
																</div>
																<span className="chat-time">
																	9:00 am
																</span>
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
																<ul className="attach-list">
																	<li className="pdf-file">
																		<i className="far fa-file-pdf" />
																		<a href="#">
																			Document_2016.pdf
																		</a>
																	</li>
																</ul>
																<span className="chat-time">
																	9:00 am
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="chat chat-right">
													<div className="chat-body">
														<div className="chat-bubble">
															<div className="chat-content">
																<ul className="attach-list">
																	<li className="pdf-file">
																		<i className="far fa-file-pdf" />
																		<a href="#">
																			Document_2016.pdf
																		</a>
																	</li>
																</ul>
																<span className="chat-time">
																	9:00 am
																</span>
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
																<p>Typing ...</p>
															</div>
														</div>
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
										<a
											className="link attach-icon"
											href="#"
											data-toggle="modal"
											data-target="#drag_files"
										>
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
							</div>
						</div>
					</div>
					<RightChat act={"Chat"} />
				</div>
			</div>
		);
	}
}
