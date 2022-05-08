import React from "react";
import { Link } from "react-router-dom";
import Quarto from "../assets/img/quarto.png"
import "../css/card.css"


function Card(props) {
    return (
        <>
            <div className="card">
                <img className="card-img" src={Quarto} alt="Rome" />
                <div className="card-content">
                    <div className="card-text-container">
                        <h1 className="card-header">{props.bairro}</h1>
                        <h2 className="card-header">{props.cidade}</h2>
                        <h3 className="card-header">{props.valor}</h3>

                        <Link to="/locacao">  
                            <button className="botao card-btn">Visitar</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Card;