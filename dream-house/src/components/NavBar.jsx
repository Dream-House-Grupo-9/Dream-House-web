import React, { useState } from "react";
import BarraDeBusca from "./BarraDeBusca";
import "../css/nav.css";
import IconeConfg from "../images/confg.png"
import { Link } from "react-router-dom";
import ModalDeConfig from "./ModalDeConfig";
import "../Js/ActionModal.js";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    function switchDisplay() {
        console.log("Check");
        setVisible(false);

        if (visible === false) {
            setVisible(true);
        }
    }

    return (
        <>
            <div className="nav">
                <nav className="container-nav">
                    
                    <div onClick={() => navigate("/")} className="logo-nav-bar"></div>
                    
                    <BarraDeBusca />
                    <ul className="nav-list">
                        <div className="options">
                            <div className="icone" id="icone-entrar"></div>
                                <li onClick={() => navigate("/login")}>Entrar</li>
                        </div>
                        {/* <div className="options">
                            <div className="icone" id="icone-entrar"></div>
                            <Link to="/cadastro">
                            <li>Cadastro</li>
                            </Link>
                        </div> */}

                        <div className="options">
                            <div className="icone" id="icone-notificacao"></div>

                                <li onClick={() => navigate("/dashboard")}>Insights</li>
                            
                        </div>

                        <div className="options">
                            <div className="icone" id="icone-anuncio"></div>
                            
                                <li onClick={() => navigate("/cadastro-anuncio")}>Anunciar</li>
                            
                        </div>

                        <div className="confi-icon" onClick={() => switchDisplay()}>
                            <img src={IconeConfg} alt="confg" className="icone-confg" />
                        </div>
                    </ul>
                </nav>

                {/* <button  onClick={() => switchDisplay()}>teste</button> */}

            </div>

            
            <div className={visible ? "modal-position-visible" : "modal-position-invisible"} id="m1">
                <ModalDeConfig />
            </div>

        </>
    );
}


export default NavBar;