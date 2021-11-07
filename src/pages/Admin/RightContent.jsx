import React, { Component } from 'react';
import Activities from './Dashboard/Activities';
import AddTask from './Dashboard/AddTask';
import BarChart from './Dashboard/BarChart';
import Chats from './Dashboard/Chats';
import Clients from './Dashboard/Clients';
import Contacts from './Dashboard/Contacts';
import Invoices from './Dashboard/Invoices';
import Payments from './Dashboard/Payments';
import ProductStatus from './Dashboard/ProductStatus';
import ProjectStatus from './Dashboard/ProjectStatus';
import RecentProjects from './Dashboard/RecentProjects';
import TaskStatus from './Dashboard/TaskStatus';
import Witgets from './Dashboard/Witgets';
import './rightContents.css';

export default class RightContent extends Component {
    render() {
        return (
            <div className="content container-fluid" >
                <Witgets/>
                <BarChart/>
                <div className="row">
                    <ProjectStatus/>
                    <ProductStatus/>
                    <TaskStatus/>
                </div>
                <div className="row">
                    <Activities/>
                    <Chats/>
                </div>
                <div className="row">
                    <AddTask/>
                    <Contacts/>
                </div>
                <div className="row">
                    <Invoices />
                    <Payments />
                </div>
                <div className="row">
                    <Clients />
                    <RecentProjects />
                </div>
            </div>
        )
    }
}
