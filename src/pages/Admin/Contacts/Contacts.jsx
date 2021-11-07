import React, { Component } from 'react';
import ContactAlphapets from '../Components/ContactAlphapets';
import HeaderFixed from '../Components/HeaderFixed';
import RolesPermissionsNav from '../Components/RolesPermissionsNav';
import MainContacts from './MainContacts';
import $ from'jquery';
import CustomModal from '../Components/CustomModal';
import ShowModal from '../../../classes/ShowModal';

export default class Contacts extends Component {
    componentDidMount(){
        if ($('.page-wrapper').length > 0) {
            var height = $(window).height();
            $(".page-wrapper").css("min-height", height);
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameMod: "",
        };
    }
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    render() {
        return (
            <div className="chat-main-row">
                <CustomModal id={this.state.id} nameMod={this.state.nameMod} size={'lg'}>
                    <ShowModal id={this.state.id} />
                </CustomModal>
                <div className="chat-main-wrapper">
                    <div className="col-lg-12 message-view">
                        <div className="chat-window">
                            <HeaderFixed />
                            <div className="chat-contents">
                                <div className="chat-content-wrap">
                                    <div className="chat-wrap-inner">
                                        <div className="contact-box">
                                            <div className="row">
                                                <RolesPermissionsNav showModal = { this.showModal } act="Contacts" />
                                                <MainContacts/>
                                                <ContactAlphapets/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
