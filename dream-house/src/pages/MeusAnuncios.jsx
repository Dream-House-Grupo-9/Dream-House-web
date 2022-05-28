import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../css/meus-anuncios.css";
import CardMeusAnuncios from "../components/CardMeusAnuncios";
import "../Js/ActionModal.js";
import api from "../api";


function MeusAnuncios() {

    const [meusAnuncios, setAnuncio] = useState([]);

    useEffect(() => {

        api.get().then((res) => {
            setAnuncio(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    function deletar(id) {
        api.delete(`/${id}`).then(res => {
            setAnuncio(meusAnuncios.filter(meusAnuncios => meusAnuncios.id !== id))
        }).catch(erro => {
            if (erro.response.status === 404) {
                setAnuncio(meusAnuncios.filter(meusAnuncios => meusAnuncios.id !== id))
            }
            console.log(erro);
        })
    }



    return (
        <>
            <NavBar />

            <div className="batente">
                <h2 >Meus Anúncios</h2>
            </div>

            {
                meusAnuncios.map(anuncio => (
                    <CardMeusAnuncios
                        bairro={anuncio.bairro}
                        cidade={anuncio.cidade}
                        valor={anuncio.valor}
                        id={anuncio.id}
                        key={anuncio.id}
                        funcaoDeletar={deletar}
                    />
                ))
            }

            {/* <CardMeusAnuncios bairro="Vila Mariana" cidade="São Paulo - SP" valor="R$ 1000.00,00" /> */}



        </>
    );
}

export default MeusAnuncios;
