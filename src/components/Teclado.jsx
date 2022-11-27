import React from "react";

import style from "../css/Btn.css"
import Btn from "./Btn"

const Teclado=()=>{
    return(
        <div>
            <div className="row">
                <Btn numero="C" />
                <Btn numero="()" />
                <Btn numero="%" />
                <Btn numero="/" />
            </div>
            <div className="row">
                <Btn numero="7" />
                <Btn numero="8" />
                <Btn numero="9" />
                <Btn numero="*" />
            </div>
            <div className="row">
                <Btn numero="4" />
                <Btn numero="5" />
                <Btn numero="6" />
                <Btn numero="-" />
            </div>
            <div className="row">
                <Btn numero="1" />
                <Btn numero="2" />
                <Btn numero="3" />
                <Btn numero="+" />
            </div>
            <div className="row">
                <Btn numero="+/-" />
                <Btn numero="0" />
                <Btn numero="." />
                <Btn numero="=" />
            </div>
        </div>
    );
};

export default Teclado