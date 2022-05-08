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

                        <div>

                            <label className="label-form-imovel-register-details"> <b> Disponibilidade Diária? </b> </label><br />
                            <div className="row-tick">
                                <input className="input-radio-imovel-register" type="radio" />
                                <input className="input-radio-imovel-register" type="radio" />
                            </div>

                            <label className="label-form-imovel-register-details-semanal"> <b> Disponibilidade Semanal? </b> </label>
                            <div className="row-tick">
                                <input className="input-radio-imovel-register" type="radio" />
                                <input className="input-radio-imovel-register" type="radio" /><br />
                            </div>

                            <label className="label-form-imovel-register-details-mensal"> <b> Disponibilidade Mensal? </b> </label><br />
                            <div className="row-tick">
                                <input className="input-radio-imovel-register" type="radio" />
                                <input className="input-radio-imovel-register" type="radio" /><br />
                            </div>


                        </div>

                        {/* <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Valor Diário </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <label className="label-form-imovel-register-end"> <b> Valor Semanal </b> </label><br />
                            <input className="input-form-imovel-register-default-end" type="text" />
                        </div>

                        <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Valor Mensal </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <label className="label-form-imovel-register-end"> <b> Quantidade de Dormitorios </b> </label><br />
                            <input className="input-form-imovel-register-default-end" type="text" />
                        </div>

                        <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Possui Garagem? </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <label className="label-form-imovel-register-end"> <b> Mobiliada? </b> </label><br />
                            <input className="input-form-imovel-register-default-end" type="text" />
                        </div> */}

                        <br /><br />

                        {/* <button>Finalizar Cadastro</button> */}

                    </form>
                </div>

            </div>

        </>
    );

}

export default CadastroDetalhesAnuncio;