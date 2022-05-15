import React from "react";
import "../css/CardEdit.css";
import Avatar from "../assets/img/avatar.png";

function CardEdit() {
    return (
        <>
            <div className="section-edit">
                <div className="section-content">
                    <h2>
                        Editar Perfil
                    </h2>
                    <br />
                    <img src={Avatar} alt="Imagem de perfil" />
                    <br />
                    <input type="file" className="upload-profile-img" />
                    <br />
                    <h2>
                        Editar Informações
                    </h2>
                    <br />
                    <div className="row">
                        <div className="column">
                            <label className="label-form-edit">Nome</label>
                            <input type="text" className="input-form-edit" onFocus />
                        </div>
                        <div className="column">
                            <label className="label-form-edit">Email</label>
                            <input type="text" className="input-form-edit" />
                        </div>
                        <div className="column">
                            <label className="label-form-edit">Contato</label>
                            <input type="text" className="input-form-edit" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="column">
                            <label className="label-form-edit">Senha</label>
                            <input type="password" className="input-form-edit" onFocus />
                        </div>
                        <div className="column">
                            <label className="label-form-edit">Confirmar</label>
                            <input type="password" className="input-form-edit" onFocus />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">

                            <button className="btn-edit save">Salvar</button>
                            <button className="btn-edit cancel">X Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardEdit;