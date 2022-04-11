import React from "react";
import Button from "./Button";
import Sala from "../assets/img/sala.png";

function Card(props) {
    return (
        <>
            <div class="card-container">
                <div class="card">
                    <img class="card-img" src={Sala} alt="Rome" />
                    <div class="card-content">
                        <div class="text-container">
                            <h1 class="card-header">{props.bairro}</h1>
                            <h2 class="card-header">{props.cidade}</h2>
                            <h3 class="card-header">{props.valor}</h3>
                        </div>
                        <Button clasName="btn-large" title="Visitar" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;