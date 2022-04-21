// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import "../css/cadastro.css";

function Cadastro() {

    const [color, setColor] = React.useState('#ECE9E9');

    React.useEffect(() => {
        document.body.style.backgroundColor = color;
      }, [color]);


    const [nomeInput, setNomeInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");

    function cadastrar(e) {
        e.preventDefault();
        console.log(nomeInput);
        console.log(emailInput);
        console.log(senhaInput);
    }

    return (
        <>
            <div className="box">
                <div className="text-container">
                    <a href=""><div className="logo-nav-bar cadastro"></div></a> 
                    <h4>Crie a sua conta. É grátis!</h4>
                </div>

                <div className="input-container">

                    <form onSubmit={cadastrar} >
                        <label className="label-form">Nome</label><br />
                        <input className="input-form" type="text" value={nomeInput} onChange={e => setNomeInput(e.target.value)} />
                        <br />
                        <br />
                        <label className="label-form">Email</label><br />
                        <input className="input-form" type="text" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                        <br />
                        <br />
                        <label className="label-form">Senha</label><br />
                        <input className="input-form" type="text" value={senhaInput} onChange={e => setSenhaInput(e.target.value)} />
                        <br />
                        <br />

                        <Button title="Cadastrar" />
                    </form>
                </div>

                <div className="link">
                    <h4>Já tem uma conta? <a href="#" className="login">Entrar</a></h4>
                </div>
            </div>
        </>
    );
}

export default Cadastro;