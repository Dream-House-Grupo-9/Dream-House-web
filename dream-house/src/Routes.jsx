import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import CadastroAnuncio from "./pages/CadastroAnuncio";
import CadastroAnuncioDetalhes from "./pages/CadastroDetalhesAnuncio";
import MeusAnuncios from "./pages/MeusAnuncios";



function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro-anuncio" exact element={<CadastroAnuncio />} />
                <Route path="/cadastro-anuncio-detalhes" exact element={<CadastroAnuncioDetalhes />} />
                <Route path="/meus-anuncios" exact element={<MeusAnuncios />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Rotas;
