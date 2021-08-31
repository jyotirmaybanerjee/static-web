import React from "react";

export const Contact = ({ androidStoreLink, iosStoreLink }) => {
    return (
        <section id="contact" className="vh-75 w-100 dt contact bg-green">
            <div className="dtc v-mid">
                <h2 className="tc near-white f1">
                    We <img src={require('../icons/heart.svg')} alt="love" /> new friends!
                </h2>
                <ul className="list-social tc ma0 pa0">
                    <li className="social-facebook mr3 link dib h2">
                        <a href="https://facebook.com/example" target="_blank" rel="noreferrer">
                            <img src={require('../icons/social/facebook.svg')} alt="facebook" />
                            <span className="clip">Twitter</span>
                        </a>
                    </li>
                    <li className="social-twitter mr3 link dib h2">
                        <a href="https://twitter.com/blairanderson" target="_blank" rel="noreferrer">
                            <img src={require('../icons/social/twitter.svg')} alt="twitter" />
                            <span className="clip">Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}