import React, { useEffect, useState } from "react";
import Api from "../api";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [color, setColor] = React.useState('#ECE9E9');

    React.useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);


    const [emailInput, setEmailInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");

    function entrar(e) {
        e.preventDefault();
        Api.post("/clientes/login",{
        email: emailInput,
        senha: senhaInput
        })
    }

   
    return (
        <>
            <div className="box">
                <div className="text-container">
                        <div onClick={() => navigate("/")} className="logo-nav-bar cadastro"></div>
                    <h2>Bem-Vindo</h2>
                    <h5>Acesse sua conta</h5>
                </div>

                <div className="input-container">

                    <form onSubmit={entrar} className="formulario">
                        <div className="form-login">

                            <div className="campos">
                                <label className="label-form"> <b> Email: </b> <br />
                                    <input className="input-form" type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} required /></label>
                                <br />
                            </div>

                            <div className="campos">
                                <label className="label-form"><b> Senha: </b> <br />
                                    <input className="input-form" type="password" value={senhaInput} onChange={e => setSenhaInput(e.target.value)} required/></label>
                                <br />
                            </div>

                            <button onClick={() => navigate("/cadastro-anuncio")} type="submit" className="teste">Entrar</button>
                                
                            
                        </div>

                    </form>
                </div>

                <div>
                    <h5>Esqueceu sua senha?</h5>
                </div>

                <div className="link">
                    <h5>Não possui uma conta?
                        <a onClick={() => navigate("/cadastro")} className="login"> Cadastre-se</a>
                    </h5>

                </div>
            </div>
        </>
    );
}

export default Login;