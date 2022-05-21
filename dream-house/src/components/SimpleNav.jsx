import React from "react";
import '../css/simpleNav.css';
import dreamHouse1 from '../images/dreamHouse1.png';
import { Link } from "react-router-dom";

function SimpleNav() {
    return (
        <>
            <div className="nav-body">
                <div className="container">
                    <Link to="/">
                        <div className="simple-nav-logo">
                            <img src={dreamHouse1} alt="Logo Dream House" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SimpleNav;