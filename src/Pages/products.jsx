import React from 'React';
import {ProductsData} from '../json'

export const Products = () =>{

    return (
        <div className="productos">
            {ProductsData.map((producto)=> ( 
                <card key={producto.id}producto={producto} />
            ))}
        </div>
    )
}