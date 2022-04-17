import React from "react";
import "../css/footer.css"


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container-footer">
                    <div className="menu">
                        <ul>
                            <a href=""><li>Sobre Nós</li></a>
                            <a href=""><li>Suporte</li></a>
                            <a href=""><li a haffe="">Politicas</li></a>
                        </ul>
                    </div>

                    <div className="div-menu">
                        <ul>
                            <a href=""><li>Politicas de cancelamento</li></a>
                            <a href=""><li>Termos de proprietario</li></a>
                            <a href=""><li>Termos de uso</li></a>
                        </ul>
                    </div>
                    <div className="div-informacoes">
                        <p>
                            CNPJ: <br />
                            48.512.355/0001-96
                        </p>
                        <p>
                            Endereço: Rua Haddock <br/>
                            Lobo, 595 - Cesar <br/>
                            cerqueira, São Paulo- SP, <br/>
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