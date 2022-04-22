import React from "react";
import "../css/barra-busca.css"

function BarraDeBusca() {
    
    function pesquisar(){
    }

    return (
        <>
            <div className="div-busca">
                <input placeholder="Pesquisar" className="pesquisar"></input>
                <div className="icone-busca" onClick={pesquisar()}></div>
            </div>
        </>

    );
}

export default BarraDeBusca;