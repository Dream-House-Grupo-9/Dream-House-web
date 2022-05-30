import React, { useEffect, useState } from "react";
import Api from "../api";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");

    function validateLogin() {
        if (emailInput !== "" || senhaInput !== "") {
            //inputs not blank
            if (emailInput.trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                //valid email
                return true;
            } else {
                alert("O email é inválido! Verifique-o e tente novamente.");
                return false;
            }
        } else {
            alert("Algum dos campos está vazio! Verifique-o e tente novamente.");
            return false;
        }
    }

    function logout(e) {

        if (setLoading === true)
            setLoading(false);
        Api.delete("/clientes/logout", {
            email: emailInput,
            senha: senhaInput
         }).then((res) => {
            if (res.status === 200) {
                navigate("/")
            } else {
                console.log(res);
            }
           }).catch((err) => {
            alert(err)
          }).finally(() => {
            setLoading(true)
         })
        
    }

    function doLogin(e) {
        // localStorage.setItem('Id do usuario', id);
        localStorage.setItem("email", JSON.stringify(emailInput));
        localStorage.setItem("senha", JSON.stringify(senhaInput));
        const isValid = validateLogin();
        if (isValid)
            setLoading(true);
        e.preventDefault();
        Api.post("/clientes/login", {
            email: emailInput,
            senha: senhaInput
        }).then((res) => {
            if (res.status === 200) {
                navigate("/anuncios");
            } else {
                console.log(res);
            }
        }).catch((err) => {
            alert("Usuário ou senha invalidos")
            console.error(err);
        }).finally(() => {
            setLoading(false);
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

                    <form onSubmit={doLogin} className="formulario">
                        <div className="form-login">

                            <div className="campos">
                                <label className="label-form"> <b> Email: </b> <br />
                                    <input className="input-form" type="email"
                                        value={emailInput}
                                        //  setValue={setEmailInput} 
                                        onChange={e => setEmailInput(e.target.value)}
                                        required /></label>
                                <br />
                            </div>

                            <div className="campos">
                                <label className="label-form"><b> Senha: </b> <br />
                                    <input className="input-form"
                                        type="password"
                                        value={senhaInput}
                                        //  setValue={setSenhaInput}
                                        onChange={e => setSenhaInput(e.target.value)}
                                        required /></label>
                                <br />
                            </div>

                            <button onClick={doLogin} type="submit" className="teste">Entrar</button>
                           

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