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
                        <h2>Apartamento Vila Mariana - SP, São Paulo</h2>
                        <br />
                        <h3><b>Endereço:</b>Rua Afonso Celso, 190 - vila mariana, SP</h3>
                        <br />
                        <h3><b>CEP: </b>04119-002</h3>
                        <br />
                        <h3><b>Valor Diária: R$</b>350,00</h3>
                        <br />
                        <h3><b>Valor Semanal: R$</b>350,00</h3>
                        <br />
                        <h3><b>Valor Mensal: R$</b>350,00</h3>
                        <br />
                        <div className="profile-info">
                            <img src={Profile} alt="Whatsapp" className="section-icons" />
                            <h4>Henri Cauã</h4>
                        </div>
                        <br />
                        <div className="profile-info">
                            <img src={WhatsApp} alt="Whatsapp" className="section-icons" />
                            <h4>94242-8922</h4>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="description">
                    <hr className="divisoria-horizontal" />
                    <h1 className="desc-title">Descrição</h1>
                    <p className="desc-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

        </>
    );
}

export default SectionLocation;