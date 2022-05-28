import React from "react";
import "../css/nav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="nav">
                <nav className="container-nav">
            
                   <div onClick={() => navigate("/")} className="logo-nav-bar"></div>    
                    
                </nav>
            </div>
        </>
    );
}


export default NavBar;