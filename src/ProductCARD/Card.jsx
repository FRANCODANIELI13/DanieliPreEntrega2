import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
export const Card= (prodcuto)=>{
    reuturn(
        <link to={`/products/${prodcuto.id}`} className="card-link">
        <div className="card"> 
        <img src="{producto.imagen" alt="producto.nombre" className="card-img-typ"/>
        </div> 
        <div className="card-body"> 
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{productos.descripcion}</p>
        </div>
        <div className="card-footer">
            <span className="precio">${producto.precio}</span>
        </div>
        </link>
    )
}