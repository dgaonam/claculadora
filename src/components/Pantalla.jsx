import React from "react";
import useValores from "../hooks/useValores";

const Pantalla=({valor})=>{
    const valores = useValores();
    return(
        <>
        <div className="operacion"> {valores.A} {valores.operacion}</div>
        <div className="display">{valor}</div>
        </>
    );  
};

export default Pantalla;