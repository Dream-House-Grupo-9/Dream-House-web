import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import api from "../api";
import "../css/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  //Puxando anuncio da nossa API
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
    <header>
      <NavBar />

      <main>
        <div className="slogan-banner">
          <div className="banner-content">
            <h2>AS MELHORES MORADIAS VOCÊ ENCONTRA AQUI</h2>

            <p>Os preços mais acessiveis nas melhores
              condições só na dream house</p>


              <button className="button-saiba-mais">Saiba mais</button> 
          </div>
        </div>
      </main>

      <div className="div-ap-proximos">

        <div className="ap-proximos">
          <h2 >Apartamentos recomendados</h2>
        </div>



        <div className="div-cards">
          <div className="container-card">
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
          </div>

            <button onClick={() => navigate("/anuncios")} className="button-ver-mais">Ver mais</button>

        </div>


      </div>

      <Footer />

    </header>
  );
}

export default Home;