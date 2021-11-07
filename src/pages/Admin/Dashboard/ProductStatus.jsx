import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';



class ProductStatus extends Component {
    options = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
    options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                min: 0,
                max: 200
            }
        },
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
    };
    data ={
        labels: this.props.labels,
        datasets: this.props.datasets
        }
    render() {
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xl-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Product Status</h4>
                        <div className="config__chart"><Line data={this.data} options={this.options} height={342} /></div>
                    </div>
                </div>
            </div>

        )
    }
}
let mapStateToProps = (state) => {
    return {
        labels: state.infomations.labelsProductStatus,
        datasets: state.infomations.datasetsProductStatus,
    }
}
export default connect(mapStateToProps, null)(ProductStatus);