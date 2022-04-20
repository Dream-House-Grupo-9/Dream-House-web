import React from "react";
import NavBar from "../components/NavBar";
import "../css/home.css"
import Footer from "../components/Footer";
import Card from "../components/Card";


function Home() {
  return (
    <header>
      <NavBar />

      <main>
        <div className="slogan-banner">
          <h2>AS MELHORES MORADIAS VOCÊ ENCONTRA AQUI</h2>

          <p>Os preços mais acessiveis nas melhores
            condições só na dream house</p>

          <button className="button-saiba-mais">Saiba mais</button>
        </div>
      </main>

      <div className="div-ap-proximos">

        <div className="ap-proximos">
          <h2 >Apartamentos recomendados:</h2>
        </div>



        <div className="div-cards">
          <div className="container-card">
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
            <Card bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" />
          </div>
          <button className="button-ver-mais">Ver mais</button>

        </div>


      </div>

      <Footer />

    </header>
  );
}

export default Home;