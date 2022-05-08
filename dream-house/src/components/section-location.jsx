import React from "react";
import "../css/section-location.css";
import apartment from "../images/apartment.png";
import WhatsApp from "../images/whatsapp.png";
import Profile from "../images/profile.png";

function SectionLocation() {
    return (
        <>

            <div className="section-card">

                <div className="location-image">
                    <img src={apartment} alt="Locação" className="location-img" />
                </div>
                <hr className="divisoria" />
                <div className="location-info">
                    <h1>Apartamento Vila Mariana - SP, São Paulo</h1>
                    <br />
                    <h2>Endereço: Rua Afonso Celso, 190 - vila mariana, SP</h2>
                    <br />
                    <h2>CEP: 04119-002</h2>
                    <br />
                    <div className="profile-info">
                        <img src={Profile} alt="Whatsapp" className="section-icons"/>
                        <h5>Henri Cauã</h5>
                    </div>
                    <br />
                    <div className="profile-info">
                        <img src={WhatsApp} alt="Whatsapp" className="section-icons"/>
                        <h5>94242-8922</h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SectionLocation;