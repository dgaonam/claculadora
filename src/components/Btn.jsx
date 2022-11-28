import React, { useState } from "react";
import style from "../css/Btn.css"
import useValores from "../hooks/useValores";

const Btn =({numero,valor,setValor,teclaFuncion})=>{
    const ejemplo = useValores();
    const handleClick=(e)=>{
        e.persist();
        if(teclaFuncion===true){
            if(numero==="+"){
                console.log("Suma");
                if(ejemplo.A===0){
                    ejemplo.A=valor;
                    setValor(0);
                }
                ejemplo.operacion="+";
            }else if(numero==="-"){
                console.log("Resta");
                if(ejemplo.A===0){
                    ejemplo.A=valor;
                    setValor(0);
                }
                ejemplo.operacion="-";
            }else if(numero==="*"){
                console.log("Multiplicacion");
                if(ejemplo.A===0){
                    ejemplo.A=valor;
                    setValor(0);
                }
                ejemplo.operacion="*";
            }else if(numero==="="){
                ejemplo.B=valor;
                ejemplo.r=eval(parseInt(ejemplo.A) + ejemplo.operacion +parseInt(ejemplo.B));
                setValor(ejemplo.r);
                ejemplo.A=0;
            }

            console.log("Tecla de funcion");
        }else{
            setValor(valor===0 ? numero : valor.toString() + numero);
        }
        
    }

    return(
        <div className="column" onClick={handleClick}>{numero}</div>
    );
}

export default Btn;