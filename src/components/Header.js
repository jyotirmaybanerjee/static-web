import React from "react";

export const Header = () => {
    return (
        <header className="bg-gradient near-white vh-100 overflow-hidden cf pa4">
            <div className="db dn-ns">
                <div className="dt vh-50 vh-100-ns">
                <div className="mw6 dtc v-mid tc">
                    <h1>Game shop</h1>
                    <a href="#download" className="f3 link no-underline br-pill bg-animate hover-bg-gold hover-white ba b--white ph3 pv2 mb2 dib white page-scroll">Start Now for Free!</a>
                </div>
                </div>
            </div>

            <div className="w-100 w-40-ns fl">
                <div className="device-container mt6-ns">
                <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                    <div className="screen">
                        <img src={require('../img/ios10-iphone7-home-screen-camera-app.jpg')} className="img-responsive" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="dn db-ns w-60-ns fl">
                <div className="dt vh-50 vh-100-ns mw6 center ph3">
                <div className="dtc v-mid tc tl-ns">
                    <h1 className="tc tl-ns">Game shop</h1>
                    <a href="#download" className="f3 link no-underline br-pill bg-animate hover-bg-gold hover-white ba b--white ph1 ph5-ns pv2 pv3-ns mb2 dib white page-scroll">Start Now for Free!</a>
                </div>
                </div>
            </div>
        </header>
    );
}