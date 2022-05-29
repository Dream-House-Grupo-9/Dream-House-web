import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import "../css/anuncios.css";
import "../Js/ActionModal.js";
import filter from "../assets/img/filter.png";
import api from "../api";

function Anuncio(props) {

    // const navigate = useNavigate();
    const [anuncios, setAnuncios] = useState([]);

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        api.get("/anuncios").then((res) => {
            setAnuncios(res.data);
        }).catch((err) => {
          console.log(err);
        })
    
      }, [])

    function switchDisplay() {
        console.log("Check");
        setVisible(true);

        if (visible == true) {
            setVisible(false);
        }
    }

    return (
        <>
            <NavBar />

            <div className="row">
                <img className="img-filter" src={filter} alt="" onClick={() => switchDisplay()} />
                <button className="button-export">Exportar Anuncios</button>
            </div>

            <div className={visible ? "prime-block-visible" : "prime-block-invisible"} >
                <div>
                    <b>Tipo do Aluguel</b><br /><br />
                    <a>Diária</a> <br /><br />
                    <a>Semanal</a> <br /><br />
                    <a>Mensal</a> <br /><br />
                </div>

            </div>

            <div className="anuncios-container-card">

                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />

            {
                anuncios.map(anuncio => (
                <Card
                    bairro={anuncio.bairro}
                    cidade={anuncio.cidade}
                    valor={anuncio.valor}
                    imagem={anuncio.imagem}
                    id={anuncio.id}
                    key={anuncio.id}
                />
                ))
            }

            </div>

        </>
    );
}

export default Anuncio;
