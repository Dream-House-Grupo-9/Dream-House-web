import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CardMeusAnuncios from "../components/CardMeusAnuncios";
import "../css/anuncios.css";
import "../Js/ActionModal.js";
import filter from "../assets/img/filter.png";

function Anuncio(props) {
    return (
        <>
            <NavBar />

            <img className="img-filter" src={filter} alt="" />
            

            <CardMeusAnuncios bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />



        </>
    );
}

export default Anuncio;
