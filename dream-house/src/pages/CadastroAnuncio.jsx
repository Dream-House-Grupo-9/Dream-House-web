import React, { useEffect, useState } from "react";
import NavBarCompacta from "../components/NavBarCompacta";
import { Link } from "react-router-dom";
import "../css/cadastro-anuncio.css";
import { useNavigate } from "react-router-dom";
import "../css/new-cadastro-anuncio.css";
import Api from "../api";

function CadastroAnuncio() {
    const navigate = useNavigate();


    const [descricaoInput, setDescricaoInput] = useState("");
    const [inicioDisponibilidadeInput, setiInicioDisponibilidadeoInput] = useState("");
    const [finalDisponibilidadeInput, setFinalDisponibilidadeInput] = useState("");
    const [cidadeInput, setCidadeInput] = useState("");
    const [bairroInput, setBairroInput] = useState("");
    const [logradouroInput, setLogradouroInput] = useState("");
    const [numeroInput, setNumeroInput] = useState("");
    const [telefoneLocatarioInput, setTelefoneLocatarioInput] = useState("");
    const [fotoInput, setFotoInput] = useState("");

    function segundaEtapa(e) {
        e.preventDefault();
        Api.post("/anuncios", {
            Id: "",
            descricao: descricaoInput,
            inicioDisponibilidade: inicioDisponibilidadeInput,
            finalDisponibilidade: finalDisponibilidadeInput,
            cidade: cidadeInput,
            bairro: bairroInput,
            logradouro: logradouroInput,
            numero: numeroInput,
            telefoneLocatario: telefoneLocatarioInput,
            foto: fotoInput
        })
    }


    return (
        <>
            <NavBarCompacta />
            <div className="form">
                <div className="text-container">
                    <h4>Cadastre sua locação!</h4>
                </div>

                <div class="input-group">
                    <form action="formulario-cadastro-imove">
                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Descrição</label>
                                <input type="text" name="descricao" required autoFocus />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Inicio Disponibilidade</label>
                                <input type="text" name="inicioDisponibilidade" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Fim Disponibilidade</label>
                                <input type="text" name="fimDisponibilidade" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Cidade</label>
                                <input type="text" name="cidade" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Bairro</label>
                                <input type="text" name="bairro" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Logradouro</label>
                                <input type="text" name="logradouro" required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Numero</label>
                                <input type="text" name="numero" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Telefone</label>
                                <input type="text" name="telefone" required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Semanal</label>
                                <input type="text" name="valorSemanal" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Valor Diaria</label>
                                <input type="text" name="valorDiaria" required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Mensal</label>
                                <input type="text" name="valorMensal" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Quantidade de dormitórios</label>
                                <input type="text" name="qtdDormitorios" required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Quantidade de toalettes</label>
                                <input type="text" name="qtdToalettes" required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Categoria</label>
                                <input type="text" name="categoria" required />
                            </div>

                        </div>



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
                                    <label className="label-form-imovel-register-details"> Mobiliada? </label><br />
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
                        <div className="radio-row">
                            <div className="form-content left">

                                <div className="form-column">
                                    <label className="label-form-imovel-register-details"> Ativo Diaria? </label><br />
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
                                    <label className="label-form-imovel-register-details"> Ativo Semanal? </label><br />
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
                                    <label className="label-form-imovel-register-details"> Ativo Mensal? </label><br />
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
                            <button className="btn-next-process" onClick={() => navigate("/meus-anuncios")}>Finalizar</button>
                        </div>




                    </form>

                </div>

            </div>



        </>
    );

}

export default CadastroAnuncio;