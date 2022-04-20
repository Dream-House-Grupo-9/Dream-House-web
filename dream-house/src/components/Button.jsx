import React from "react";

function Button(props){
    return(
        <>
            <button className="dh-btn">{props.title}</button>
        </>
    );
}

export default Button;