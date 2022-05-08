import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionLocation from "../components/section-location";

function Locacao() {
    return (
        <>
            <NavBar />
            <div className="container">
                <SectionLocation />
            </div>
        </>
    );
}

export default Locacao;