import React, { useEffect, useState } from "react";
// import Button from "../components/Button";
import "../css/login.css";
import { Link } from "react-router-dom";

function Login() {

    const [color, setColor] = React.useState('#ECE9E9');

    React.useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);


    const [emailInput, setEmailInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");

    function entrar(e) {
        e.preventDefault();
        console.log(emailInput);
        console.log(senhaInput);
    }

    return (
        <>
            <div className="box">
                <div className="text-container">
                    <h2>Bem-Vindo</h2>
                    <h5>Acesse sua conta</h5>
                </div>

                <div className="input-container">

                    <form onSubmit={Login} >
                        <div className="form-login">

                            <div className="campos">
                                <label className="label-form"> <b> Email: </b> <br />
                                    <input className="input-form" type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} /></label>
                                <br />
                            </div>


                            <div className="campos">
                                <label className="label-form"><b> Senha: </b> <br />
                                    <input className="input-form" type="password" value={senhaInput} onChange={e => setSenhaInput(e.target.value)} /></label>
                                <br />
                            </div>


                            <div className="">
                                <Link to="/">
                                    <button className="teste">Entrar</button>
                                    {/* <Button className="teste" title="Entrar" /> */}
                                </Link>
                            </div>
                        </div>
                        
                    </form>
                </div>

                <div>
                    <h5>Esqueceu sua senha?</h5>
                </div>

                <div className="link">
                    {/* href faz aparecer aviso no terminal e polui o console, removi temporariamente até fazermos as rotas */}
                    <h5>Não possuí uma conta?
                        <Link to="/cadastro">
                            <a className="login"> Cadastre-se</a>
                        </Link>
                    </h5>

                </div>
            </div>
        </>
    );
}

export default Login;