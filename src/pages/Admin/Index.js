import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AdminRouter1 from "../../components/admin/AdminRouter/Index";
import Estimates from "./Accounts/Estimates";
import Activities from "./Activities/Activities";
import Attendance from "./Attendance/Attendance";
import Clients from "./Clients/Clients";
import ClientsList from "./Clients/ClientsList";
import Invoices from "./Accounts/Invoices";
import Department from "./Department/Department";
import Designations from "./Designations/Designations";
import Employees from "./Employees/Employees";
import EmployeesList from "./Employees/EmployeesList";
import Holidays from "./Holidays/Holidays";
import Leads from "./Leads/Leads";
import Leave from "./Leave/Leave";
import Login from "./Login/Login";
import EditProfile from "./Profile/EditProfile";
import Profile from "./Profile/Profile";
import RightContent from "./RightContent";
import Salary from "./Salary/Salary";
import SalaryView from "./Salary/SalaryView";
import ChangePassword from "./Settings/ChangePassword";
import ChangePassword2 from "./Login/ChangePassword2";
import CompanySetting from "./Settings/CompanySetting";
import EmailSetting from "./Settings/EmailSetting";
import InvoiceSetting from "./Settings/InvoiceSetting";
import LeaveType from "./Settings/LeaveType";
import Localization from "./Settings/Localization";
import NotificationSetting from "./Settings/NotificationSetting";
import RolesPermissionsSetting from "./Settings/RolesPermissionsSetting";
import SalarySetting from "./Settings/SalarySetting";
import ThemeSetting from "./Settings/ThemeSetting";
import Tasks from "./Tasks/Tasks";
import Users from "./Users/Users";
import Worksheet from "./Worksheet/Worksheet";
import Expenses from "./Accounts/Expenses";
import ProvidentFund from "./Accounts/ProvidentFund";
import Taxes from "./Accounts/Taxes";
import Register from "./Login/Register";
import ForgotPassword from "./Login/ForgotPassword";
import LockScreen from "./Errors/LockScreen";
import Error404 from "./Errors/Error404";
import Error500 from "./Errors/Error500";
import BlankPage from "./BlankPage/BlankPage";
import Gallery from "./Gallery/Gallery";
import ComingSoon from "./ComingSoon/ComingSoon";
import Pricing from "./Pricing/Pricing";
import Products from "./Products/Products";
import ProductsList from "./Products/ProductsList";
import Orders from "./Products/Orders";
import ProductDetails from "./Products/ProductDetails";
import News from "./News/News";
import NewsDetails from "./News/NewsDetails";
import Chat from "./Chat/Chat";
import VoiceCall from "./Chat/VoiceCall";
import VideoCall from "./Chat/VideoCall";
import IncomingCall from "./Chat/IncomingCall";
import Contacts from "./Contacts/Contacts";
import Tickets from "./Tickets/Tickets";
import CalendarPages from "./Calendar/CalendarPages";
import Projects from "./Projects/Projects";
import ProjectList from "./Projects/ProjectList";

export default class Index extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/admin/login" component={Login} />
					<Route path="/admin/register" component={Register} />
					<Route path="/admin/forgot-password" component={ForgotPassword} />
					<Route path="/admin/change-password2" component={ChangePassword2} />
					<Route path="/admin/lock-screen" component={LockScreen} />
					<Route path="/admin/error-404" component={Error404} />
					<Route path="/admin/error-500" component={Error500} />
					<Route path="/admin/coming-soon" component={ComingSoon} />
					{/* <RouteIndex/> */}
					<AdminRouter1 path="/admin/settings" component={CompanySetting} />
					<AdminRouter1 path="/admin/localization" component={Localization} />
					<AdminRouter1 path="/admin/email-settings" component={EmailSetting} />
					<AdminRouter1
						path="/admin/salary-settings"
						component={SalarySetting}
					/>
					<AdminRouter1
						path="/admin/change-password"
						component={ChangePassword}
					/>
					<AdminRouter1 path="/admin/theme-settings" component={ThemeSetting} />
					<AdminRouter1
						path="/admin/invoice-settings"
						component={InvoiceSetting}
					/>
					<AdminRouter1
						path="/admin/notifications-settings"
						component={NotificationSetting}
					/>
					<AdminRouter1
						path="/admin/roles-permissions"
						component={RolesPermissionsSetting}
					/>
					<AdminRouter1 path="/admin/leave-type" component={LeaveType} />
					{/* employees */}
					<AdminRouter1 path="/admin/employees" component={Employees} />
					<AdminRouter1
						path="/admin/employees-list"
						component={EmployeesList}
					/>
					{/* profile */}
					<AdminRouter1 path="/admin/profile" component={Profile} />
					<AdminRouter1 path="/admin/edit-profile" component={EditProfile} />
					{/* Department */}
					<AdminRouter1 path="/admin/departments" component={Department} />
					{/* designations */}
					<AdminRouter1 path="/admin/designations" component={Designations} />
					{/* designations */}
					<AdminRouter1 path="/admin/holidays" component={Holidays} />
					{/* Leave */}
					<AdminRouter1 path="/admin/leaves" component={Leave} />
					{/* Users */}
					<AdminRouter1 path="/admin/users" component={Users} />
					{/* Attendance */}
					<AdminRouter1 path="/admin/attendance" component={Attendance} />
					{/* Activities */}
					<AdminRouter1 path="/admin/activities" component={Activities} />
					{/* Worksheet */}
					<AdminRouter1 path="/admin/worksheet" component={Worksheet} />
					{/* Users */}
					<AdminRouter1 path="/admin/leads" component={Leads} />
					{/* Clients */}
					<AdminRouter1 path="/admin/clients" component={Clients} />
					<AdminRouter1 path="/admin/clients-list" component={ClientsList} />
					{/* Tasks */}
					<AdminRouter1 path="/admin/tasks" component={Tasks} />
					{/* Salary */}
					<AdminRouter1 path="/admin/salary" component={Salary} />
					<AdminRouter1 path="/admin/salary-view" component={SalaryView} />
					{/* Accounts */}
					<AdminRouter1 path="/admin/estimates" component={Estimates} />
					<AdminRouter1 path="/admin/invoices" component={Invoices} />
					<AdminRouter1 path="/admin/expenses" component={Expenses} />
					<AdminRouter1
						path="/admin/provident-fund"
						component={ProvidentFund}
					/>
					<AdminRouter1 path="/admin/taxes" component={Taxes} />
					{/* blank-page */}
					<AdminRouter1 path="/admin/blank-page" component={BlankPage} />
					{/* Gallery */}
					<AdminRouter1 path="/admin/gallery" component={Gallery} />
					{/* Pricing */}
					<AdminRouter1 path="/admin/pricing" component={Pricing} />
					{/* Products */}
					<AdminRouter1 path="/admin/products" component={Products} />
					<AdminRouter1 path="/admin/products-list" component={ProductsList} />
					<AdminRouter1 path="/admin/orders" component={Orders} />
					<AdminRouter1
						path="/admin/product-details"
						component={ProductDetails}
					/>
					{/* News */}
					<AdminRouter1 path="/admin/news" component={News} />
					<AdminRouter1 path="/admin/news-details" component={NewsDetails} />
					{/* Chat */}
					<AdminRouter1 path="/admin/chat" component={Chat} />
					<AdminRouter1 path="/admin/voice-call" component={VoiceCall} />
					<AdminRouter1 path="/admin/video-call" component={VideoCall} />
					<AdminRouter1 path="/admin/incoming-call" component={IncomingCall} />
					{/* contacts */}
					<AdminRouter1 path="/admin/contacts" component={Contacts} />
					{/* tickets */}
					<AdminRouter1 path="/admin/tickets" component={Tickets} />
					{/* calendar */}
					<AdminRouter1 path="/admin/calendar" component={CalendarPages} />
					{/* projects */}
					<AdminRouter1 path="/admin/projects" component={Projects} />
					<AdminRouter1 path="/admin/project-list" component={ProjectList} />
					{/* dashboard */}
					<AdminRouter1 path="/admin" component={RightContent} />
				</Switch>
			</BrowserRouter>
		);
	}
}
