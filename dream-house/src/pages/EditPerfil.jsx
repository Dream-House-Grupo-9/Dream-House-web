import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardEdit from "../components/CardEdit";

function EditPerfil() {
    return (
        <>
            <NavBar />
            <div className="container"> 
                <CardEdit />
            </div>
            <Footer/>
        </>
    );
}

export default EditPerfil;