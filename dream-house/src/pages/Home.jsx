import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import api from "../api";

function Home() {

    const [anuncio, setAnuncio] = useState([]);

    useEffect(() => {
        api.get().then((res) => {
            setAnuncio(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },
        []);

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
                    {/* <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                    <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
                    <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" /> */}

                    {
                        anuncio.map(anuncio => (
                            <Card bairro={anuncio.bairro} cidade={anuncio.cidade} valor={anuncio.valorDiaria} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;