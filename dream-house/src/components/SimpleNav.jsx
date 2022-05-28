import React from "react";
import '../css/simpleNav.css';
import dreamHouse1 from '../images/dreamHouse1.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SimpleNav() {
    const navigate = useNavigate();

    return (
        <>
            <div className="nav-body">
                <div className="container">
                    
                    <div onClick={() => navigate("/")} className="simple-nav-logo">
                        <img src={dreamHouse1} alt="Logo Dream House" />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default SimpleNav;