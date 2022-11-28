import React, { useState } from "react";
import style from "../css/Btn.css"
import useValores from "../hooks/useValores";

const Btn =({numero,valor,setValor,teclaFuncion,clase})=>{
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
            }else if(numero==="/"){
                console.log("Division");
                if(ejemplo.A===0){
                    ejemplo.A=valor;
                    setValor(0);
                }
                ejemplo.operacion="/";
            }else if(numero==="%"){
                console.log("Modulo");
                if(ejemplo.A===0){
                    ejemplo.A=valor;
                    setValor(0);
                }
                ejemplo.operacion="%";
            }else if(numero==="C"){
                setValor(0);
                ejemplo.A=0;
                ejemplo.A=0;
                ejemplo.operacion=null
            }else if(numero==="+/-"){
                setValor(valor*-1);  
            }else if(numero==="="){
                if(valor===0){
                    setValor("Error -- La division entre cero no esta definida --");
                }else{
                    ejemplo.B=valor;
                    ejemplo.r=eval(parseFloat(ejemplo.A) + ejemplo.operacion +parseFloat(ejemplo.B));
                    setValor(ejemplo.r);
                    console.log(ejemplo);
                    ejemplo.A=0;
                    ejemplo.A=0;
                    ejemplo.operacion=null
                }
                
            }
        }else{
            setValor(valor===0 ? numero : valor.toString() + numero);
        }
        
    }

    return(
        <div className={clase} onClick={handleClick}>{numero}</div>
    );
}

export default Btn;