import React from "react";
import "../css/modal-config.css";
import IconeEdit from "../assets/img/edit.png";
import IconeDelete from "../assets/img/delete-user.png"
import IconeExit from "../assets/img/logout.png"

function ModalDeConfig(){
    return(
        <>
            <div className="triangulo-para-cima"></div>

            <div className="conteudo-configs">

                <div className="space-configs">
                    <img src={IconeEdit} alt="edit" className="icone-edit" />
                    Editar Perfil
                </div>

                <div className="space-configs">
                    <img src={IconeDelete} alt="edit" className="icone-edit" />
                    Excluir Conta
                </div>

                <div className="space-configs">
                    <img src={IconeExit} alt="edit" className="icone-edit" />
                    Sair
                </div>

            </div>
        </>
    );
}

export default ModalDeConfig;