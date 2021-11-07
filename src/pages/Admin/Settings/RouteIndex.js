import React, { Component } from 'react'
import AdminRouter1 from '../../../components/admin/AdminRouter/Index'
import RightContent from '../RightContent'
import ChangePassword from './ChangePassword'
import CompanySetting from './CompanySetting'
import EmailSetting from './EmailSetting'
import InvoiceSetting from './InvoiceSetting'
import LeaveType from './LeaveType'
import Localization from './Localization'
import NotificationSetting from './NotificationSetting'
import RolesPermissionsSetting from './RolesPermissionsSetting'
import SalarySetting from './SalarySetting'
import ThemeSetting from './ThemeSetting'

export default class RouteIndex extends Component {
    render() {
        return (
            <div>
                <AdminRouter1 path="/admin/settings" component={CompanySetting} />
                <AdminRouter1 path="/admin/localization" component={Localization} />
                <AdminRouter1 path="/admin/email-settings" component={EmailSetting} />
                <AdminRouter1 path="/admin/salary-settings" component={SalarySetting} />
                <AdminRouter1 path="/admin/change-password" component={ChangePassword} />
                <AdminRouter1 path="/admin/theme-settings" component={ThemeSetting} />
                <AdminRouter1 path="/admin/invoice-settings" component={InvoiceSetting} />
                <AdminRouter1 path="/admin/notifications-settings" component={NotificationSetting} />
                <AdminRouter1 path="/admin/roles-permissions" component={RolesPermissionsSetting} />
                <AdminRouter1 path="/admin/leave-type" component={LeaveType} />
                <AdminRouter1 exact path="/admin" component={RightContent} />
            </div>
        )
    }
}
