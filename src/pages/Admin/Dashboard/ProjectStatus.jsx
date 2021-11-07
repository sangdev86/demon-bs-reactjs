import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import {connect} from 'react-redux';



class ProjectStatus extends Component {
    data = this.props.data;
    render() {
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Project Status</h4>
                        <div className="config__chart">
                            <DonutChart data={this.data} legend={false} width={260} height={342} formatValues={(values) => `${values}`}/>
                        </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        data: state.infomations.datasetsProjectStatus,
    }
}
export default connect(mapStateToProps, null)(ProjectStatus);

