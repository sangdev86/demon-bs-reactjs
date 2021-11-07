import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";


class TaskStatus extends Component {
    options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 200
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        maintainAspectRatio: false,
    };
    data =
        {
            labels: this.props.labels,
            datasets: this.props.datasets,
        }
    render() {
        return (
            <div className="col-sm-12 col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Task Status</h4>
                        <div className="config__chart"><Line data={this.data} options={this.options} height={342} /></div>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        labels: state.infomations.labelsTaskStatus,
        datasets: state.infomations.datasetsTaskStatus,
    }
}
export default connect(mapStateToProps, null)(TaskStatus);