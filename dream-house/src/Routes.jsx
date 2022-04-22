import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"



function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/login" exact element={<Login />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Rotas;
