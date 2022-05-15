import React from "react";

import Quarto from "../assets/img/quarto.png"
import "../css/card.css"


function Card(props) {
    return (
        <>
            <div className="card">
                <img className="card-img" src={Quarto} alt="Home" />
                <div className="card-content">
                    <div className="card-text-container">
                        <h1 className="card-header">{props.bairro}</h1>
                        <h2 className="card-header">{props.cidade}</h2>
                        <h3 className="card-header">{props.valor}</h3>

                        <button className="botao">Visitar</button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Card;