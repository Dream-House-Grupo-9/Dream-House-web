import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@mui/material/Button';

//Esse componente box vai servir como uma casca
//Vc pode preencher ele com conteudo
function Input(props) {
    return (
        <>
            <div className="box">
                <div className="text-container">
                    <h1>Bem Vindo!!!</h1>
                    <h3>Acesse sua conta</h3>
                </div>
                <div className="input-container">
                    <TextField id="outlined-basic" className="dh-input" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" className="dh-input" label="Nome" variant="outlined" />
                    <br />
                    <Button className="dh-btn" variant="contained">Contained</Button>
                </div>
            </div>
        </>
    );
}

export default Input;