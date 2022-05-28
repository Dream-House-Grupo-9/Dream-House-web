import React, { useState } from "react";
import Quarto from "../assets/img/quarto.png"
import "../css/card-meus-anuncios.css"
import api from "../api";


function CardMeusAnuncios(props) {

    
    


    const [bairroInput, setBairroInput] = useState("");
    const [cidadeInput, setCidadeInput] = useState("");
    const [valorInput, setValorInput] = useState("");

    const [editavel, setEditavel] = useState(false);


    function editar() {
        const objAnuncio = {
            bairro: bairroInput,
            cidade: cidadeInput,
            valor: valorInput,
        }

        api.put(`/${props.FaltaDefinirOid}`, objAnuncio).then(res => {
            alert("Atualizado");
            setEditavel(false);
        }).catch(erro => {
            console.log("Deu ruim!")
        })

        setEditavel(false);
    }


    


    return (
        <>
            <div className="card">
                <img className="card-img" src={Quarto} alt="Home" />
                <div className="card-content">
                    <div className="card-text-container">

                        <p>
                            <strong className="card-title">Bairro: </strong>
                            <input className={editavel ? "input-bairro-enable" : "input-bairro-disabled"} type="text" disabled={!editavel}
                                defaultValue={bairroInput} onChange={e => setBairroInput(e.target.value)} />
                        </p>

                        <p>
                            <strong className="card-title">Cidade: </strong>
                            <input className={editavel ? "input-cidade-enable" : "input-cidade-disabled"} type="text" disabled={!editavel}
                                defaultValue={cidadeInput} onChange={e => setCidadeInput(e.target.value)} />
                        </p>

                        <p>
                            <strong className="card-title">Valor: </strong>
                            <input className={editavel ? "input-valor-enable" : "input-valor-disabled"} type="text" disabled={!editavel}
                                defaultValue={valorInput} onChange={e => setValorInput(e.target.value)} />
                        </p>



                        <div className="card-buttons">

                            <button className="botao" onClick={() => setEditavel(true)}>Editar</button>

                            <button className={editavel ? "botao-enable" : "botao-disabled"}
                                onClick={(editar)}>Salvar</button>

                            <button className="botao" onClick={() => props.funcaoDeletar(props.id)} >Excluir</button>
                            
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default CardMeusAnuncios;