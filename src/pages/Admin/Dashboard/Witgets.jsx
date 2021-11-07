import React, { Component } from 'react';
import { connect } from 'react-redux';

class Witgets extends Component {
    render() {
        let {revenue,userCounts,projectCounts,TaskCounts}= this.props;
        return (
            <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget dash-widget5">
                        <span className="dash-widget-icon bg-success"><i className="far fa-money-bill-alt" aria-hidden="true" /></span>
                        <div className="dash-widget-info">
                            <h3>{`$${revenue}`}</h3>
                            <span>Revenue</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget dash-widget5">
                        <span className="dash-widget-icon bg-info"><i className="far fa-user" /></span>
                        <div className="dash-widget-info">
                            <h3>{userCounts}</h3>
                            <span>Users</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget dash-widget5">
                        <span className="dash-widget-icon bg-warning"><i className="far fa-copy" /></span>
                        <div className="dash-widget-info">
                            <h3>{projectCounts}</h3>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget dash-widget5">
                        <span className="dash-widget-icon bg-danger"><i className="fa fa-tasks" aria-hidden="true" /></span>
                        <div className="dash-widget-info">
                            <h3>{TaskCounts}</h3>
                            <span>Tasks</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) =>{
    return{
        revenue: state.infomations.revenue,
        userCounts: state.infomations.userCounts,
        projectCounts: state.infomations.projectCounts,
        TaskCounts: state.infomations.TaskCounts,
    }
}
export default connect(mapStateToProps, null)(Witgets);