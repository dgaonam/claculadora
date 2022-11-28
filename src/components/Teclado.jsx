import React, { useEffect } from "react";
import Pantalla from "./Pantalla";
import style from "../css/Btn.css"
import Btn from "./Btn"
import { useState } from "react";
import useValores from "../hooks/useValores";

const Teclado=()=>{
    const [valor,setValor] = useState(0);
    const ejemplo = useValores();
    
   
    useEffect(()=>{
        if(ejemplo){
            console.log(ejemplo);
        }
    },[ejemplo]);

    return(
        <>
        
        <Pantalla   valor={valor}/>

        <div>
            <div className="row">
                <Btn numero="C" valor={valor} setValor={setValor} teclaFuncion={true} />
                <Btn numero="()" valor={valor} setValor={setValor} teclaFuncion={true}/>
                <Btn numero="%" valor={valor} setValor={setValor} teclaFuncion={true}/>
                <Btn numero="/" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={7} valor={valor} setValor={setValor}/>
                <Btn numero={8} valor={valor} setValor={setValor}/>
                <Btn numero={9} valor={valor} setValor={setValor}/>
                <Btn numero="*" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={4} valor={valor} setValor={setValor}/>
                <Btn numero={5} valor={valor} setValor={setValor}/>
                <Btn numero={6} valor={valor} setValor={setValor}/>
                <Btn numero="-" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={1} valor={valor} setValor={setValor}/>
                <Btn numero={2} valor={valor} setValor={setValor}/>
                <Btn numero={3} valor={valor} setValor={setValor}/>
                <Btn numero="+" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero="+/-" valor={valor} setValor={setValor} teclaFuncion={true}/>
                <Btn numero={0} valor={valor} setValor={setValor}/>
                <Btn numero="." />
                <Btn numero="=" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
        </div>
        </>
    );
};

export default Teclado