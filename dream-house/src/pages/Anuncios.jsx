import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import "../css/anuncios.css";
import "../Js/ActionModal.js";
import filter from "../assets/img/filter.png";

function Anuncio(props) {
    
    const [visible, setVisible] = useState(false);

    function switchDisplay() {
        console.log("Check");
        setVisible(true);

        if(visible == true){
            setVisible(false);
        }
    }

    return (
        <>
            <NavBar />

            <img className="img-filter" src={filter} alt="" onClick={() => switchDisplay()} />

            <div className={visible ? "prime-block-visible" : "prime-block-invisible"} >
                <div>
                    <b>Tipo do Aluguel</b><br /><br />
                    <a>Diária</a> <br /><br />
                    <a>Semanal</a> <br /><br />
                    <a>Mensal</a> <br /><br />
                </div>

            </div>

            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />



        </>
    );
}

export default Anuncio;
