import React, { Component } from 'react';
import ExtrasNav from './ExtrasNav';
import MainNav from './MainNav';

export default class DashboardNav extends Component {
    render() {
        let {showModal} = this.props;
        return (
            <div>
                <MainNav showModal={showModal}/>
                <ExtrasNav showModal={showModal}/>
            </div>
        )
    }
}
