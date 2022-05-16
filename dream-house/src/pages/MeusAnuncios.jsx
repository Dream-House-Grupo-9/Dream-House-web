import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import api from "../api";
import "../css/meus-anuncios.css";
import CardMeusAnuncios from "../components/CardMeusAnuncios";
import ModalDeConfig from "../components/ModalDeConfig";
import "../Js/ActionModal.js";


function MeusAnuncios(props) {
    return (
        <>
            <NavBar />

            <div className="batente">
                <h2 >Meus Anúncios</h2>
            </div>

            <CardMeusAnuncios bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />



        </>
    );
}

export default MeusAnuncios;
