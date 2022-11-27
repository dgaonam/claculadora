import React from "react";
import style from "../css/Btn.css"

const Btn =({numero,valor,setValor})=>{

    const handleClick=(numero)=>{
        console.log("funcion" + numero);
    }

    return(
        <div className="column" onClick={handleClick(numero)}>{numero}</div>
    );
}

export default Btn;