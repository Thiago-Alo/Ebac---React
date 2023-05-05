import React, { useState } from "react";
import logo from '../../logo.svg';

function Header(props){
    let [count, setCount] = useState(1);

    function incrementar(){
        setCount(++count);
        console.log(count)
    }

    return(
        <header>
            <h1>{props.title}</h1>
            <img src={logo} height={50} width={50} />
            <p>Contador: {count}</p>
            <button onClick={incrementar}>Aumentar</button>
        </header>
    )
}

export default Header;