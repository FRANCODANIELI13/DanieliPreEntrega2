import React from "react";
export const CartButtons = () =>{
    consta [state,setState] = React.useState(1);
    const handleMoreClick = () =>{
        if(state ===6 ) return;
        setState(state + 1)
    }
    return(
        <>
        <div>{state}</div>
        <input placeholder="Cantidad"/>
        <button onClick={handleMoreClick}>Agregar +</button>
        <button>Agrega al <Carrito></Carrito></button>
        </>
    );
};