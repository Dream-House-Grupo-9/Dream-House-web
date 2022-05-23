import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="menu">
                        <ul>
                            <Link to="/sobre">
                                <li>Sobre Nós</li>
                            </Link>

                            <li>Suporte</li>
                            <li>Politicas</li>
                        </ul>
                    </div>

                    <div className="div-menu">
                        <ul>
                            <li>Politicas de cancelamento</li>
                            <li>Termos de proprietario</li>
                            <li>Termos de uso</li>
                        </ul>
                    </div>
                    <div className="div-informacoes">
                        <p>
                            CNPJ: <br />
                            48.512.355/0001-96
                        </p>
                        <p>
                            Endereço: Rua Haddock <br />
                            Lobo, 595 - Cesar <br />
                            cerqueira, São Paulo- SP, <br />
                            01414-001
                        </p>
                    </div>
                    <form className="formulario-footer">
                        <input placeholder="Email"></input>
                        <textarea placeholder="Assunto"></textarea>
                        <button className="button-enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Footer;