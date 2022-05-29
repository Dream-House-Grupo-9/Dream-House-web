import React, { useEffect, useState } from "react";
import NavBarCompacta from "../components/NavBarCompacta";
import "../css/cadastro-anuncio.css";

function CadastroDetalhesAnuncio() {

    return (
        <>
            <NavBarCompacta />

            <div className="box">
                <div className="text-container">
                    <h4>Informe mais detalhes sobre o seu imóvel!</h4>
                </div>

                <div className="input-container">
                    <form className="formulario-cadastro-detalhes-imovel">

                        <div className="form-content">

                            <div className="form-column">
                                <label className="label-form-imovel-register-details">Disponibilidade Diária?</label><br />
                                <div className="row-tick">
                                    <div className="row-tick-item">
                                        <label>Sim</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                        <label>Não</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-column">
                                <label className="label-form-imovel-register-details">Disponibilidade Semanal?</label><br />
                                <div className="row-tick">
                                    <div className="row-tick-item">
                                        <label>Sim</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                        <label>Não</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-column">
                                <label className="label-form-imovel-register-details"> <b> Disponibilidade Mensal? </b> </label><br />
                                <div className="row-tick">
                                    <div className="row-tick-item">
                                        <label>Sim</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                        <label>Não</label>
                                        <input className="input-radio-imovel-register" type="radio" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br /><br />

                        <button className="btn-segunda-etapa" type="submit">Finalizar Cadastro</button>

                    </form>
                </div>

            </div>

        </>
    );

}

export default CadastroDetalhesAnuncio;