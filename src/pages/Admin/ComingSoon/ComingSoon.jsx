import React, { Component } from 'react';
import $ from 'jquery';
import { Capitalize } from '../../../classes/FormatSlug';

export default class ComingSoon extends Component {
   componentDidMount(){
       function getTimeRemaining(endtime) {
           var t = Date.parse(endtime) - Date.parse(new Date());
           var seconds = Math.floor((t / 1000) % 60);
           var minutes = Math.floor((t / 1000 / 60) % 60);
           var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
           var days = Math.floor(t / (1000 * 60 * 60 * 24));
           return {
               'total': t,
               'days': days,
               'hours': hours,
               'minutes': minutes,
               'seconds': seconds
           };
       }

       function initializeClock(id, endtime) {
           var clock = document.getElementById(id);
           var daysSpan = clock.querySelector('.days');
           var hoursSpan = clock.querySelector('.hours');
           var minutesSpan = clock.querySelector('.minutes');
           var secondsSpan = clock.querySelector('.seconds');

           function updateClock() {
               var t = getTimeRemaining(endtime);
               daysSpan.innerHTML = t.days;
               hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
               minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
               secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
               if (t.total <= 0) {
                   clearInterval(timeinterval);
               }
           }
           updateClock();
           var timeinterval = setInterval(updateClock, 1000);
       }

       var deadline = new Date(Date.parse(new Date()) + 256 * 24 * 60 * 60 * 1000);
       if ($("#countdown").length > 0)
           initializeClock('countdown', deadline);
   }
    render() {
        let titleName = this.props.location.pathname
        if (titleName === '/admin') {
            document.title = 'Dashboard';
        }else{
            let title = titleName.replace("/admin/", "");

            document.title = Capitalize(title);
        }
        return (
            <div className="main-wrapper coming-wrapper">
                <div className="table-cell">
                    <div className="container">
                        <div className="title-section">
                            <h1 className="coming-title">Launching Soon</h1>
                            <p className="sub-title">We’re working very hard on the new version of our site. Stay tuned!</p>
                        </div>
                        <div className="countdown" id="countdown">
                            <ul>
                                <li className="timer">
                                    <span className="days">365</span>
                                    <p className="countdown-period">Days</p>
                                </li>
                                <li className="seperator">:</li>
                                <li className="timer">
                                    <span className="hours">23</span>
                                    <p className="countdown-period">Hours</p>
                                </li>
                                <li className="seperator">:</li>
                                <li className="timer">
                                    <span className="minutes">45</span>
                                    <p className="countdown-period">Minutes</p>
                                </li>
                                <li className="seperator">:</li>
                                <li className="timer">
                                    <span className="seconds">12</span>
                                    <p className="countdown-period">Seconds</p>
                                </li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="newsletter">
                            <h3>get notified about our launch</h3>
                            <form>
                                <input type="text" placeholder="Enter email address" />
                                <button className="submit-btn" type="submit">Notify Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
