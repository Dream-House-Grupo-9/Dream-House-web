import React, { useEffect, useState } from "react";
import "../css/modal-config.css";
import IconeEdit from "../assets/img/edit.png";
import IconeDelete from "../assets/img/delete-user.png"
import IconeExit from "../assets/img/logout.png"
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Api from "../api";



function ModalDeConfig() {
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();
     

    function logout(e) {

        if (setLoading === true)
            
        Api.delete(`/clientes/logout${localStorage.getItem("id", localStorage.getItem("id"))}`, {
            
         }).then((res) => {
            if (res.status === 200) {
                navigate("/")
            } else {
                console.log(res);
            }
           }).catch((err) => {
            alert(err)
          }).finally(() => {
        
         })
        
    }
     

    return (
        <>
            <div className="modal-body">
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
                        <img src={IconeExit} onClick={logout} alt="edit" className="icone-edit" />
                        Sair
                    </div>

                </div>
            </div>
        </>
    );
}

export default ModalDeConfig;