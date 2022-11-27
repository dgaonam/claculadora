import React, { useState } from "react";
import style from "../css/Btn.css"

const Btn =({numero,valor,setValor})=>{
    
    const handleClick=(e)=>{
        e.persist();
        setValor(valor===0 ? numero : valor.toString() + numero);
    }

    return(
        <div className="column" onClick={handleClick}>{numero}</div>
    );
}

export default Btn;