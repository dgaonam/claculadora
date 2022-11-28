import React, { useEffect } from "react";
import Pantalla from "./Pantalla";
import style from "../css/Btn.css"
import Btn from "./Btn"
import { useState } from "react";
import useValores from "../hooks/useValores";

const Teclado=()=>{
    const [valor,setValor] = useState(0);
    const ejemplo = useValores();

    return(
        <>
        
        <Pantalla   valor={valor}/>

        <div>
            <div className="row">
                <Btn numero="C" clase="column_two" valor={valor} setValor={setValor} teclaFuncion={true} />
                
                <Btn numero="%" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
                <Btn numero="/" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={7} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={8} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={9} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero="*" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={4} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={5} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={6} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero="-" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero={1} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={2} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero={3} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero="+" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
            <div className="row">
                <Btn numero="+/-" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
                <Btn numero={0} clase="column" valor={valor} setValor={setValor}/>
                <Btn numero="." clase="column" valor={valor} setValor={setValor}/>
                <Btn numero="=" clase="column" valor={valor} setValor={setValor} teclaFuncion={true}/>
            </div>
        </div>
        </>
    );
};

export default Teclado