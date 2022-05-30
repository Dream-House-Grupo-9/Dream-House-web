import React, { useState } from "react";
import Quarto from "../assets/img/quarto.png"
import "../css/card-meus-anuncios.css"
import Card from "./Card";
import api from "../api";
import "../css/anuncios.css";

function CardMeusAnuncios(props) {

    const [bairroInput, setBairroInput] = useState(props.bairro);
    const [cidadeInput, setCidadeInput] = useState(props.cidade);
    const [valorMesInput, setValorMesInput] = useState(props.valorMes);




    function editar() {
        const objAnuncio = {
            bairro: bairroInput,
            cidade: cidadeInput,
            valorMes: valorMesInput,
        }

        api.put(`/${props.id}`, objAnuncio).then(res => {
            alert("Atualizado");
            setEditavel(false);
        }).catch(erro => {
            console.log("Deu ruim!")
        })

        setEditavel(false);
    }

    const [editavel, setEditavel] = useState(false);




    return (
        <>

            <div className="anuncios-container-card">
                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            </div>

        </>
    );
}

export default CardMeusAnuncios;