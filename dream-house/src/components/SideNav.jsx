import React from "react";
import '../css/side-nav.css';
import exit from '../images/exit.svg';
import house from '../images/house.svg';
import profile from '../images/profile.png';
import Chart from '../images/chart.svg';
import Anunciar from '../images/anunciar.png';
import { useNavigate } from "react-router-dom";

function SideNav() {
    
    const navigate = useNavigate();
    return (
        <>
            <div className="side-nav-body">
                <div className="side-nav-item" onClick={() => navigate("/")}>
                    <div className="side-nav-itens">
                        <img src={house} alt="House icon" className="house-icon" />
                        <h4>Home</h4>
                    </div>
                </div>
                <div className="side-nav-item" onClick={() => navigate("/edit")}>
                    <div className="side-nav-itens">
                        <img src={profile} alt="House icon" className="house-icon" />
                        <h4>Perfil</h4>
                    </div>
                </div>
                <div className="side-nav-item" >
                    <div className="side-nav-itens">
                        <img src={Chart} alt="House icon" className="house-icon" />
                        <h4>Insights</h4>
                    </div>
                </div>
                <div className="side-nav-item" onClick={() => navigate("/cadastro-anuncio")}>
                    <div className="side-nav-itens">
                        <img src={Anunciar} alt="House icon" className="house-icon" />
                        
                        <h4>Anunciar</h4>
                    </div>
                </div>
                <div className="side-nav-item" onClick={() => navigate("/login")}>
                    <div className="side-nav-itens">
                        <img src={exit} alt="House icon" className="house-icon" />
                        <h4 >Sair</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNav;