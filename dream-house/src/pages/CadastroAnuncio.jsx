import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import NavBarCompacta from "../components/NavBarCompacta";
import "../css/cadastro-anuncio.css";
import { useNavigate } from "react-router-dom";
import "../css/new-cadastro-anuncio.css";
import Api from "../api";

function CadastroAnuncio() {


    const navigate = useNavigate();

    const [descricaoInput, setDescricaoInput] = useState("");
    const [inicioDisponibilidadeInput, setInicioDisponibilidadeoInput] = useState("");
    const [finalDisponibilidadeInput, setFinalDisponibilidadeInput] = useState("");
    const [cidadeInput, setCidadeInput] = useState("");
    const [bairroInput, setBairroInput] = useState("");
    const [logradouroInput, setLogradouroInput] = useState("");
    const [numeroInput, setNumeroInput] = useState("");
    const [valorDiariaInput, setValorDiariaInput] = useState("");
    const [valorSemanalInput, setValorSemanalInput] = useState("");
    const [valorMensalInput, setValorMensalInput] = useState("");
    const [qtdToaletesInput, setQtsToaletesInput] = useState("");
    const [categoriaInput, setCategoriaInput] = useState("");
    const [qtdDormitoriosInput, setQtdDormitoriosInput] = useState("");
    //gararem
    //area de trabalho
    //mobiliada? 
    //ativa diaria?
    //ativa semanal?
    //ativa mensal?
    const [telefoneLocatarioInput, setTelefoneLocatarioInput] = useState("");
    // falta upload de imagens
    const [fotoInput, setFotoInput] = useState("");


    function finalizar(e) {
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
            valorDiaria: valorDiariaInput,
            valorSemanal: valorSemanalInput,
            valorSemanal: valorSemanalInput,
            valorMensal: valorMensalInput,
            qtdToaletes: qtdToaletesInput,
            qtdDormitorios: qtdDormitoriosInput,
            categoria: categoriaInput,

            //Tem que verificar abaixo
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
                                <input type="text" name="descricao"
                                    value={descricaoInput}
                                    onChange={e => setDescricaoInput(e.target.value)}
                                    required autoFocus />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Inicio Disponibilidade</label>
                                <input type="text" name="inicioDisponibilidade"
                                    value={inicioDisponibilidadeInput}
                                    onChange={e => setInicioDisponibilidadeoInput(e.target.value)} required />
                            </div>


                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Fim Disponibilidade</label>
                                <input type="text" name="fimDisponibilidade"
                                    value={finalDisponibilidadeInput}
                                    onChange={e =>
                                        setFinalDisponibilidadeInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Cidade</label>
                                <input type="text" name="cidade"
                                    value={cidadeInput}
                                    onChange={e =>
                                        setCidadeInput(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Bairro</label>
                                <input type="text" name="bairro"
                                    value={bairroInput}
                                    onChange={e =>
                                        setBairroInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Logradouro</label>
                                <input type="text" name="logradouro"
                                    value={logradouroInput}
                                    onChange={e =>
                                        setLogradouroInput(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Numero</label>
                                <input type="text" name="numero"
                                    value={numeroInput}
                                    onChange={e =>
                                        setNumeroInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Telefone</label>
                                <input type="text" name="telefone"
                                    value={telefoneLocatarioInput}
                                    onChange={e =>
                                        setTelefoneLocatarioInput(e.target.value)}
                                    required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Semanal</label>
                                <input type="text" name="valorSemanal"
                                    value={valorSemanalInput}
                                    onChange={e =>
                                        setValorSemanalInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Valor Diaria</label>
                                <input type="text" name="valorDiaria"
                                    value={valorDiariaInput}
                                    onChange={e =>
                                        setValorDiariaInput(e.target.value)}
                                    required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Valor Mensal</label>
                                <input type="text" name="valorMensal"
                                    value={valorMensalInput}
                                    onChange={e =>
                                        setValorMensalInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Quantidade de dormitórios</label>
                                <input type="text" name="qtdDormitorios"
                                    value={qtdDormitoriosInput}
                                    onChange={e =>
                                        setQtdDormitoriosInput(e.target.value)}
                                    required />
                            </div>

                        </div>

                        <div className="inpt-row center-row">
                            <div class="input-box">
                                <label for="firstname">Quantidade de toalettes</label>
                                <input type="text" name="qtdToalettes"
                                    value={qtdToaletesInput}
                                    onChange={e =>
                                        setQtsToaletesInput(e.target.value)}
                                    required />
                            </div>

                            <div class="input-box">
                                <label for="firstname">Categoria</label>
                                <input type="text" name="categoria"
                                    value={categoriaInput}
                                    onChange={e =>
                                        setCategoriaInput(e.target.value)}
                                    required />
                            </div>

                        </div>


                        {/* Tristeza e depressão abaixo */}



                        <div className="inpt-row ">
                            <div className="form-content left">

                                <div className="form-column">
                                    <label className="label-form-imovel-register-details"> Possui garagem? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input type="radio" name="webmaster" value="" className="input-radio-imovel-register" /> <br />
                                            <label>Não</label>
                                            <input type="radio" name="webmaster" value="" className="input-radio-imovel-register" /> <br />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column align-right">
                                    <label className="label-form-imovel-register-details"> Possui area de trabalho? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input type="radio" name="workspace" value="sim" className="input-radio-imovel-register" /> <br />
                                            <label>Não</label>
                                            <input type="radio" name="workspace" value="nao" className="input-radio-imovel-register" /> <br />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column left">
                                    <label className="label-form-imovel-register-details"> A Locação Mobiliada? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" name="mobiliada" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" name="mobiliada" type="radio" />
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
                                            <input className="input-radio-imovel-register" name="ativoDiaria" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" name="ativoDiaria" type="radio" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column align-right">
                                    <label className="label-form-imovel-register-details"> Ativo Semanal? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" name="ativoSemanal" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" name="ativoSemanal" type="radio" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-column left">
                                    <label className="label-form-imovel-register-details"> Ativo Mensal? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item">
                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" name="ativoMensal" type="radio" />
                                            <label>Não</label>
                                            <input className="input-radio-imovel-register" name="ativoMensal" type="radio" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <br />


                        <div className="inpt-row">
                            <button className="btn-images right" type="submit">
                                <input type="file"
                                    accept="image/*" className="file" />
                            </button>
                            <button className="btn-next-process" type="submit" onClick={() => navigate("/meus-anuncios")}>Finalizar</button>
                        </div>


                    </form>

                </div>

            </div>



        </>
    );

}

export default CadastroAnuncio;