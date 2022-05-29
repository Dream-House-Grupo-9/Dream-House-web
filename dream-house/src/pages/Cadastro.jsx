// import React, { useState } from "react";
import React, { useEffect, useState } from "react";

import Api from "../api";
import "../css/cadastro.css";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    const navigate = useNavigate();

    const [color, setColor] = React.useState('#ECE9E9');

    React.useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);
    


    const [nomeInput, setNomeInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");

    function cadastrar(e) {
        e.preventDefault();
        Api.post("/clientes", {
            Id: "",
            nome: nomeInput,
            email: emailInput,
            senha: senhaInput
        })
    }

    return (
        <>
            <div className="box">
                <div className="text-container">
                    
                    <div onClick={() => navigate("/")} className="logo-nav-bar cadastro"></div>
                    

                    <h4>Crie a sua conta. É grátis!</h4>
                </div>

                <div className="input-container">

                    <form onSubmit={cadastrar} className="formulario-cadastro">
                        <div className="form-cadastro">

                            <label className="label-form-register"> <b> Nome: </b></label><br />
                            <input className="input-form-register" type="text" value={nomeInput} onChange={e => setNomeInput(e.target.value)} required />
                            <br />
                            <br />
                            <label className="label-form-register"> <b> Email: </b></label><br />
                            <input className="input-form-register" type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} required />
                            <br />
                            <br />
                            <label className="label-form-register"> <b> Senha: </b> </label><br />
                            <input className="input-form-register" type="password" value={senhaInput} onChange={e => setSenhaInput(e.target.value)} required />
                            <br />
                            <br />
                                <button className="btn-register" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className="link">
                    <h4>Já tem uma conta?    
                            <a onClick={() => navigate("/login")} className="login">Entrar</a>
                    </h4>
                </div>
            </div>
        </>
    );
}

export default Cadastro;