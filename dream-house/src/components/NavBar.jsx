import React from "react";
import BarraDeBusca from "./BarraDeBusca";
import "../css/nav.css";
import IconeConfg from "../images/confg.png"
import { Link } from "react-router-dom";

function NavBar() {
    
    return (
        <>
            <div className="nav">
                <nav className="container-nav">
                   <a href=""><div className="logo-nav-bar"></div></a> 
                    <BarraDeBusca />
                    <ul className="nav-list">
                        <div className="options">
                            <div className="icone" id="icone-entrar"></div>
                            <Link to="/login">
                            <li>Entrar</li>
                            </Link>
                            
                        </div>
                        {/* <div className="options">
                            <div className="icone" id="icone-entrar"></div>
                            <Link to="/cadastro">
                            <li>Cadastro</li>
                            </Link>
                        </div> */}

                        <div className="options">
                            <div className="icone" id="icone-notificacao"></div>
                            <li>Notificações</li>
                        </div>
                        
                        <div className="options">
                            <div className="icone" id="icone-anuncio"></div>
                            <li>Anuncios</li>
                        </div>
                        
                        <img src={IconeConfg} alt="confg" className="icone-confg" />
                    </ul>

                </nav>
            </div>
        </>
    );
}


export default NavBar;