import React from 'react';
import { styled } from "styled-components";


function Navbar() {
    return (
        <>
        <NavContainer>
            <h1>Tienda<span>Carral</span></h1>
            <div>
                <a href="/">Home</a>
                <a href="/">Marcas</a>
                <a href="/">Indumentaria</a>
                <a href="/">Calzado</a>
            </div>
        </NavContainer>
        </> 
    ) 
   
}
export default Navbar;

const NavContainer = styled.nav` 
  h1{
    font-weight: 400;
    color: white;
    span{
        font-weight: bold;
    }
  }
  padding: 4rem;
  background-colo:black;
  display: flex;
  align-items: center;
  justify-content: space between;
  a{
    color: white;
    text-decoration:none;
    margin-right: 1rem;
  }
` 
