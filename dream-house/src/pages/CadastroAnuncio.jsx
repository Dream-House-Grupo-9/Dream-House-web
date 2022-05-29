import React, { useEffect, useState } from "react";
import NavBarCompacta from "../components/NavBarCompacta";
import { Link } from "react-router-dom";
import "../css/cadastro-anuncio.css";
import { useNavigate } from "react-router-dom";
import "../css/new-cadastro-anuncio.css";

function CadastroAnuncio() {
    const navigate = useNavigate();

    return (
        <>
            <NavBarCompacta />

            {/* <div className="box">
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

                        comentar
                        <div className="row-especial">
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
                        </div>
                        cabo

                        <br /><br />

                        
                        <button onClick={() => navigate("/cadastro-anuncio-detalhes")} className="btn-segunda-etapa">Segunda Etapa</button>
                        

                    </form>
                </div>

            </div> */}

            <div className="form">
                <div className="text-container">
                    <h4>Cadastre sua locação!</h4>
                </div>

                <div class="input-group">
                    <form action="formulario-cadastro-imove">
                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Descrição</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Inicio Disponibilidade</label>
                                <input type="text" name="firstname" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Fim Disponibilidade</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Cidade</label>
                                <input type="text" name="firstname" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Bairro</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Logradouro</label>
                                <input type="text" name="firstname" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Numero</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Proprietario</label>
                                <input type="text" name="firstname" required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Semanal</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Valor Diaria</label>
                                <input type="text" name="firstname" required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Mensal</label>
                                <input type="text" name="firstname" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Quantidade de dormitórios</label>
                                <input type="text" name="firstname" required />
                            </div>

                        </div>

                        <div className="inpt-row">
                            <div class="input-box center">
                                <label for="firstname">Quantidade toalettes</label>
                                <input type="text" className="input-large" name="firstname" required />
                            </div>
                        </div>
                        <br />
                   
                        
                        <div className="inpt-row ">
                            <div className="form-content left">

                                <div className="form-column">
                                    <label className="label-form-imovel-register-details"> Possui garagem? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" type="radio" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column align-right">
                                    <label className="label-form-imovel-register-details"> Possui area de trabalho? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" type="radio" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column left">
                                    <label className="label-form-imovel-register-details"> Possui garagem </label><br />
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
                        </div>
                        <br />


                        <div className="inpt-row">
                            <button className="btn-images right" type="submit">Inserir Imagens</button>
                            <button className="btn-next-process" onClick={() => navigate("/login")}>Segunda Etapa</button>
                        </div>




                    </form>

                </div>

            </div>


        </>
    );

}

export default CadastroAnuncio;