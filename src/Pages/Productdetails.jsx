import React from 'React';
import { useParams } from 'react-router-dom';
import {ProductsData} from '../json'

export const ProductDetail = () =>{
    const {ProductId} = useParams () ;
    const producto = ProductsData.find((p) => p.id === productsId);
    if  (!producto) {
        return <div>Producto no encontrado</div>
    }
    return(
        <div className='detalle del producto'>
            <h1>{producto.nombre}</h1>
            <img src="{producto.imagen}" alt="producto.nombre" className='img-fluid' />
            <p>{producto.descripcion}</p>
            <span className='precio'>${producto.precio}</span>
            <button className='carrito'>Agregar al carrito</button>
        </div>
    );
};
