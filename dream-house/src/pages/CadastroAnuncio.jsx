import React, { useEffect, useState } from "react";
import NavBarCompacta from "../components/NavBarCompacta";
import { Link } from "react-router-dom";
import "../css/cadastro-anuncio.css";

function CadastroAnuncio() {

    return (
        <>
            <NavBarCompacta />

            <div className="box">
                <div className="text-container">
                    <h4>Cadastre sua locação!</h4>
                </div>

                <div className="input-container">
                    <form className="formulario-cadastro-imovel">
                        <label className="label-form-imovel-register"> <b> Descrição </b> </label><br />
                        <input className="input-form-imovel-register" type="text" /><br />
                        <br />

                        <div className="row-cadastro-anuncio">
                            <div className="row-content">
                                <label className="label-form-imovel-register"> <b> Inicio Disponibilidade</b> </label><br />
                                <input className="input-form-imovel-register-default-end left" type="text" />

                            </div>

                            <div className="row-content">
                                <label className="label-form-imovel-register-end"> <b> Fim Disponibilidade</b> </label><br />
                                <input className="input-form-imovel-register-default-end" type="text" />
                            </div>
                        </div>

                        {/* <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Cidade </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <label className="label-form-imovel-register-end"> <b> Bairro </b> </label><br />
                            <input className="input-form-imovel-register-default-end" type="text" />
                        </div>

                        <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Logradouro </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <label className="label-form-imovel-register-end"> <b> Número </b> </label><br />
                            <input className="input-form-imovel-register-default-end" type="text" />
                        </div>

                        <div className="row-especial">
                            <label className="label-form-imovel-register"> <b> Nome do Proprietário </b> </label><br />
                            <input className="input-form-imovel-register-default" type="text" />

                            <button className="btn-images" type="submit">Inserir Imagens</button>
                        </div> */}

                        <br /><br />

                        <Link to="/cadastro-anuncio-detalhes">
                            <button className="btn-segunda-etapa">Segunda Etapa</button>
                        </Link>

                    </form>
                </div>

            </div>

        </>
    );

}

export default CadastroAnuncio;