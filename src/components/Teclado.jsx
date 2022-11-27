import React from "react";
import Pantalla from "./Pantalla";
import style from "../css/Btn.css"
import Btn from "./Btn"
import { useState } from "react";

const Teclado=()=>{
    const [valor,setValor] = useState(0);
    
    return(
        <>
        
        <Pantalla   valor={valor}/>

        <div>
            <div className="row">
                <Btn numero="C"  />
                <Btn numero="()" />
                <Btn numero="%" />
                <Btn numero="/" />
            </div>
            <div className="row">
                <Btn numero={7} valor={valor} setValor={setValor}/>
                <Btn numero={8} valor={valor} setValor={setValor}/>
                <Btn numero={9} valor={valor} setValor={setValor}/>
                <Btn numero="*" />
            </div>
            <div className="row">
                <Btn numero={4} valor={valor} setValor={setValor}/>
                <Btn numero={5} valor={valor} setValor={setValor}/>
                <Btn numero={6} valor={valor} setValor={setValor}/>
                <Btn numero="-" />
            </div>
            <div className="row">
                <Btn numero={1} valor={valor} setValor={setValor}/>
                <Btn numero={2} valor={valor} setValor={setValor}/>
                <Btn numero={3} valor={valor} setValor={setValor}/>
                <Btn numero="+" />
            </div>
            <div className="row">
                <Btn numero="+/-" />
                <Btn numero={0} valor={valor} setValor={setValor}/>
                <Btn numero="." />
                <Btn numero="=" />
            </div>
        </div>
        </>
    );
};

export default Teclado