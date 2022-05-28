import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/sobre.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sobre() {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="div-sobre">
                    <div className="div-conteudo">

                            <h3 className="back" onClick={() => navigate("/")}>Voltar</h3>

                        <h1>Sobre Nós</h1>


                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                            molestiae temporibus facere dolor placeat commodi doloribus inventore
                            voluptate est excepturi aperiam quisquam natus earum ratione dolorem

                        </p>

                        <br />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                            molestiae temporibus facere dolor placeat commodi doloribus inventore
                            voluptate est excepturi aperiam quisquam natus earum ratione dolorem

                        </p>

                    </div>

                    <div className="banner-sobre"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Sobre;