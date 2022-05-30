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
    const [isGaragem, setIsGaragem] = useState("");
    const [isWork, setIsWork] = useState("");
    const [isMobiliada, setMobiliada] = useState("");
    const [isDiario, setDiario] = useState("");
    const [isSemanal, setSemanal] = useState("");
    const [isMensal, setMensal] = useState("");
    const [telefoneLocatarioInput, setTelefoneLocatarioInput] = useState("");
    const [id] = useState(1);

    // falta upload de imagens
    const [fotoInput, setFotoInput] = useState("");

    function changeGaragem(event) {
        setIsGaragem(event.target.value);
    }

    function changeWork(event) {
        setIsWork(event.target.value);
    }

    function changeMobiliada(event) {
        setMobiliada(event.target.value);
    }

    function changeDiaria(event) {
        setDiario(event.target.value);
    }

    function changeSemanal(event) {
        setSemanal(event.target.value);
    }

    function changeMensal(event) {
        setMensal(event.target.value);
    }

    function finalizar(e) {
        e.preventDefault();
        Api.post("/anuncios", {
            telefoneLocatario: telefoneLocatarioInput,
            descricao: descricaoInput,
            inicioDisponibilidade: inicioDisponibilidadeInput,
            finalDisponibilidade: finalDisponibilidadeInput,
            cidade: cidadeInput,
            bairro: bairroInput,
            logradouro: logradouroInput,
            numero: numeroInput,
            cliente: { id: 1 },
            detalhe: {
                idDetalhesAnuncio: '',
                ativoDiaria: isDiario,
                garagem: isGaragem,
                areaDeTrabalho: isWork,
                mobiliada: isMobiliada,
                ativoMensal: isMensal,
                ativoSemanal: isSemanal,
                valorDiaria: valorDiariaInput,
                valorSemanal: valorSemanalInput,
                valorMes: valorMensalInput,
                qtdToaletes: qtdToaletesInput,
                qtdDormitorios: qtdDormitoriosInput,
                categoria: categoriaInput
            }
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

                                        <div className="row-tick-item" onChange={changeGaragem}>

                                            <label>Sim</label>
                                            <input type="radio" value="true" onChange={e =>
                                                setIsGaragem(e.target.value)}
                                                checked={isGaragem == "true"}
                                                className="input-radio-imovel-register" /> <br />

                                            <label>Não</label>
                                            <input type="radio" value="false"
                                                onChange={e =>
                                                    setIsGaragem(e.target.value)}
                                                checked={isGaragem == "false"} className="input-radio-imovel-register" /> <br />

                                        </div>

                                    </div>
                                </div>

                                <div className="form-column align-right">
                                    <label className="label-form-imovel-register-details"> Possui area de trabalho? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item" onChange={changeWork}>

                                            <label>Sim</label>
                                            <input type="radio" value="true"
                                                onChange={e =>
                                                    setIsWork(e.target.value)}
                                                checked={isWork == "true"} className="input-radio-imovel-register" /> <br />

                                            <label>Não</label>
                                            <input type="radio"
                                                onChange={e =>
                                                    setIsWork(e.target.value)}
                                                value="false" checked={isWork == "false"} className="input-radio-imovel-register" /> <br />

                                        </div>
                                    </div>
                                </div>

                                <div className="form-column left">
                                    <label className="label-form-imovel-register-details"> A Locação Mobiliada? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item" onChange={changeMobiliada}>

                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setMobiliada(e.target.value)}
                                                value="true" checked={isMobiliada == "true"} name="mobiliada" type="radio" />

                                            <label>Não</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setMobiliada(e.target.value)}
                                                value="false" checked={isMobiliada == "false"} name="mobiliada" type="radio" />

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
                                        <div className="row-tick-item" onChange={changeDiaria}>

                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register" value="true"
                                                onChange={e =>
                                                    setDiario(e.target.value)}
                                                checked={isDiario == "true"} name="ativoDiaria" type="radio" />

                                            <label>Não</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setDiario(e.target.value)}
                                                value="false" checked={isDiario == "false"} name="ativoDiaria" type="radio" />

                                        </div>
                                    </div>
                                </div>

                                <div className="form-column align-right">
                                    <label className="label-form-imovel-register-details"> Ativo Semanal? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item" onChange={changeSemanal}>

                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setSemanal(e.target.value)}
                                                value="true" checked={isSemanal == "true"} name="ativoSemanal" type="radio" />

                                            <label>Não</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setSemanal(e.target.value)}
                                                value="false" checked={isSemanal == "false"} name="ativoSemanal" type="radio" />

                                        </div>
                                    </div>
                                </div>

                                <div className="form-column left">
                                    <label className="label-form-imovel-register-details"> Ativo Mensal? </label><br />
                                    <div className="row-tick">
                                        <div className="row-tick-item"
                                            onChange={changeMensal}>

                                            <label>Sim</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setMensal(e.target.value)}
                                                value="true" checked={isMensal == "true"} name="ativoMensal" type="radio" />

                                            <label>Não</label>
                                            <input className="input-radio-imovel-register"
                                                onChange={e =>
                                                    setMensal(e.target.value)}
                                                value="false" checked={isMensal == "false"} name="ativoMensal" type="radio" />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <br />


                        <div className="inpt-row">
                            {/* <button className="btn-images right" type="submit">
                                <input type="file"
                                    accept="image/*" className="file" />
                            </button> */}
                            <button className="btn-next-process" type="submit" onClick={finalizar}>Finalizar</button>
                        </div>


                    </form>

                </div>

            </div>



        </>
    );

}

export default CadastroAnuncio;