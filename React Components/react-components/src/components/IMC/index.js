import React, {useState} from "react";
import './style.css';

function IMC(){
    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);
    let [imc, setImc] = useState(0);

    function calculator(){
        setImc(parseFloat( weight / (height * height)));
    }

    return(
        <div className="IMC">
            <h2>Calculo IMG</h2>
            <p>Informe seu peso</p>
            <input 
                value={weight}
                onChange={e => setWeight(e.target.value)}
                type="text" placeholder="Informe seu peso"/>
            <p>Informe sua altura</p>
            <input 
                value={height}
                onChange={e => setHeight(e.target.value)}
                type="text" placeholder="Informe sua altura" />
            <button onClick={calculator}>Calcular</button>
            <p>Seu IMC é: {imc}</p>
        </div>
    )
}

export default IMC;