import React from "react";
import styled from "styled-components";
import ButtonOrange from "./ButtonOrange";


const ParrafoStyles = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    transform: translateX(200px);
    gap: 30px;

    & h1{
        font-size: 40px;
        color: black;
        font-weight: 800;
    }
    & p{
        color: black;
        font-size: 1.2rem;
        line-height: 30px;
    }
`

const Parrafocontainer = () => {
    return(
        <ParrafoStyles>
            <h1>Compania de alta innovación </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate. Et nisi, quo adipisci, beatae, eum quaerat voluptates perspiciatis deleniti pariatur odio velit ratione ipsa? Accusamus corporis pariatur maxime optio?</p>
            
            <ButtonOrange>Nuestros Servicios</ButtonOrange>
               
        </ParrafoStyles>
    )
}

export default Parrafocontainer