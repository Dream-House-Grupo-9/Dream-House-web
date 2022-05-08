import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function NavBar() {
    
    return (
        <>
            <div className="nav">
                <nav className="container-nav">
                <Link to="/">
                   <a href=""><div className="logo-nav-bar"></div></a> 
                </Link>
                    
                </nav>
            </div>
        </>
    );
}


export default NavBar;