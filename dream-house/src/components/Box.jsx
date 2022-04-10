import React from "react";
import Input from "./Input";
import Button from "./Button";



//Esse componente box vai servir como uma casca
//Vc pode preencher ele com conteudo
function BoxForm() {

    return (
        <>
            <div className="box">
                <div className="text-container">
                    <h1>Bem Vindo!!!</h1>
                    <h5>Acesse sua conta</h5>
                </div>
                <div className="input-container">
                    <Input mascara="Email" />
                    <Input mascara="Senha" />
                </div>
                <Button title="Enviar" />
                <div className="link">
                    <a href="#" className="password-link">Esqueceu a senha?</a>
                    <br />
                    <h3>Não possui uma conta? <a href="#" className="register">Cadastre-se</a></h3>
                </div>
            </div>
        </>
    );
}

export default BoxForm;