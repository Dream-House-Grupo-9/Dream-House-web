import React, { useState } from "react";
import BarraDeBusca from "./BarraDeBusca";
import "../css/nav.css";
import IconeConfg from "../images/confg.png"
import { Link } from "react-router-dom";
import ModalDeConfig from "./ModalDeConfig";
import "../Js/ActionModal.js";

function NavBar() {

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
                    <Link to="/">
                        <div className="logo-nav-bar"></div>
                    </Link>
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
                            <Link to="/dashboard">
                                <li>Insights</li>
                            </Link>
                        </div>

                        <div className="options">
                            <div className="icone" id="icone-anuncio"></div>
                            <Link to="/login">
                                <li>Anunciar</li>
                            </Link>
                        </div>

                        <div className="confi-icon" onClick={() => switchDisplay()}>
                            <img src={IconeConfg} alt="confg" className="icone-confg" />
                        </div>
                    </ul>
                </nav>

                {/* <button  onClick={() => switchDisplay()}>teste</button> */}

            </div>
            <div className={visible ? "modal-position-invisible" : "modal-position-visible"} id="m1">
                <ModalDeConfig />
            </div>
        </>
    );
}


export default NavBar;