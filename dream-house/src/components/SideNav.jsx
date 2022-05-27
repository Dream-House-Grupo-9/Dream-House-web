import React from "react";
import '../css/side-nav.css';
import exit from '../images/exit.svg';
import house from '../images/house.svg';
import profile from '../images/profile.png';

function SideNav() {
    return (
        <>
            <div className="side-nav-body">
                <div className="side-nav-item">
                    <div className="side-nav-itens">
                        <img src={house} alt="House icon" className="house-icon" />
                        <h4>Home</h4>
                    </div>
                </div>
                <div className="side-nav-item">
                    <div className="side-nav-itens">
                        <img src={profile} alt="House icon" className="house-icon" />
                        <h4>Perfil</h4>
                    </div>
                </div>
                <div className="side-nav-item">
                    <div className="side-nav-itens">
                        <img src={exit} alt="House icon" className="house-icon" />
                        <h4>Sair</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNav;