import React from "react";
import Card from "../components/Card";

function Home() {
    return (
        <>
            <div className="container">
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