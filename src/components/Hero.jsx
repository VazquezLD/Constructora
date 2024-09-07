import React from "react";
import styled from "styled-components";
import Parrafocontainer from "./Parrafocontainer";


const SeccionStyles = styled.section`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 90vh;
    background-color: #e1e2e6;
`


const Hero = () => {
    return (<SeccionStyles><Parrafocontainer></Parrafocontainer></SeccionStyles>)
}

export default Hero