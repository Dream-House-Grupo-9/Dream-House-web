import React from "react";
import "../css/section-location.css";
import apartment from "../images/apartment.png";
import WhatsApp from "../images/whatsapp.png";
import Profile from "../images/profile.png";

import api from '../api';

function SectionLocation() {
    return (
        <>

            <div className="section-card">
                <div className="product">
                    <div className="location-image">
                        <img src={apartment} alt="Locação" className="location-img" />
                    </div>
                    <hr className="divisoria vertical" />
                    <div className="location-info">
                        <div className="info-space">
                            <h2>Apartamento Vila Mariana</h2>
                        </div>

                        <div className="info-space">
                            <h4><b>Categoria: </b> Apartamento</h4>
                        </div>

                        <div className="info-space">
                            <h4><b>Cidade: </b> São Paulo</h4>
                        </div>
                        
                        <div className="info-space">
                            <h4><b>Bairro: </b> Vila Mariana</h4>

                        </div>

                        <div className="info-space">
                            <h4><b>Logradouro: </b> Rua Afonso Celso</h4>
                        </div>

                        <div className="info-space">

                            <h4><b>Numero: </b> 190</h4>
                        </div>

                        <div className="info-space">

                            <h4><b>Valor Diária: R$</b> 350,00</h4>
                        </div>

                        <div className="info-space">

                            <h4><b>Valor Semanal: R$</b> 350,00</h4>
                        </div>
                        <div className="info-space">

                            <h4><b>Valor Mensal: R$</b> 350,00</h4>
                        </div>

                        <div className="info-space">

                            <h4><b>Tipo Ativo: </b> Mensal</h4>
                        </div>                        

                        <div className="info-space">

                            <div className="profile-info">
                                <img src={Profile} alt="Whatsapp" className="section-icons" />
                                <h4>Henri Cauã</h4>
                            </div>
                        </div>

                        <div className="info-space">

                        </div>
                        <div className="profile-info">
                            <img src={WhatsApp} alt="Whatsapp" className="section-icons" />
                            <h4>94242-8922</h4>
                        </div>
                        <br />
                    </div>
                    <br />
                </div>
                <div className="description">
                    <hr className="divisoria-horizontal" />
                    <h1 className="desc-title">Descrição</h1>
                    <p className="desc-content">
                        Casa boa, com detalhamento nas paredes e com bom espaçamento para crianças e animais. Recomendado para finais de semanas e jornadas de férias para um bom aproveito do moradia. <br /><br />

                        Mais informações, entrar em contato via WhatsApp.
                    </p>
                </div>
            </div>

        </>
    );
}

export default SectionLocation;