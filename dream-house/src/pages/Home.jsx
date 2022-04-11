import React from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

function Home() {
    return (
        <>
            <Menu />

            <Banner />
            <div className="container">
                <div className="section-title">
                    <h1>Apartamentos proximos a você</h1>
                    <hr className="section-line" />
                </div>
                <div className="grid">
                    <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                    <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                    <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                </div>
            </div>
        </>
    );
}

export default Home;