import React from "react";

export const Nav = () => {
    return (
        <header id="mainNav" className="z-max cf fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l bg-animate bb b--black-10">
            <div className="w-80 center">
                <nav className="f5 b tracked fl w-50">
                    <a className="link dim dib page-scroll" href="#page-top">Game shop</a>
                </nav>
                <nav className="f6 tracked tr fl w-50">
                    <a className="link dim ph3 dib page-scroll" href="#download">Download</a>
                    <a className="link dim ph3 dib page-scroll" href="#features">Features</a>
                    <a className="link dim ph3 dib page-scroll" href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}