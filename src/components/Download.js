import React from "react";

export const Download = ({ androidStoreLink, iosStoreLink }) => {
    return (
        <section id="download" className="vh-75 dt bg-mid-gray near-white w-100">
            <div className="dtc v-mid center measure tc">
                <h2 className="f1 f-headline-ns">Learn what all the fuzz is about!</h2>
                <p>Our app is available on any mobile device! Download now to get started!</p>
                <div>
                    <a className="dib mb4 mb0-ns" href={iosStoreLink}>
                        <img
                            style={{height: '60px'}}
                            src={require('../img/google-play-badge.svg')}
                            alt="iOS app store"
                        />
                    </a>
                    <a className="dib mb4 mb0-ns" href={androidStoreLink}>
                        <img
                            style={{height: '60px'}}
                            src={require('../img/app-store-badge.svg')}
                            alt="Android app store"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}