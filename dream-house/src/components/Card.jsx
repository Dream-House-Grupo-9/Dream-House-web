import React, { useState }from "react";
import Quarto from "../assets/img/quarto.png"
import "../css/card.css"
import { useNavigate } from "react-router-dom";


function Card(props) {
    const navigate = useNavigate();

  const [bairro, setBairro] = useState(props.bairro);
  const [cidade, setCidade] = useState(props.cidade);
  const [valor, setValor] = useState(props.valorMes);


    return (
        <>
            <div className="card">
                <img className="card-img" src={Quarto} alt="Home" />
                <div className="card-content">
                    <div className="card-text-container">
                        <h1 className="card-header">{props.bairro}</h1>
                        <h2 className="card-header">{props.cidade}</h2>
                        <h3 className="card-header">{props.valorMes}</h3>
                        <button onClick={() => navigate("/locacao")} className="botao card-btn">Visitar</button>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Card;