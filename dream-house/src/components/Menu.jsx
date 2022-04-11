import React from "react";
import Logo from "../assets/img/logo.png"

function Menu() {
    return(
        <>
            <nav>
                <div className="container">
                    <img src={Logo} alt="" className="logo" />
                </div>
            </nav>
        </>
    );
}

export default Menu;