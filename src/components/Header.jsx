import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGooglePlus, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import headerLogo from "../assets/pngegg.png"

const HeaderStyles = styled.header`
    height: 75px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    background-color: #1a1918b9;

    & ul{
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;
        font-size: 15px;
    }
    & img{
        height: 55px;
    }
`
const HeaderStyled = () => {
    return (
    <HeaderStyles>
        <img src={headerLogo} alt="logo" />
        <ul>
            <li><a href="1">Inicio</a></li>
            <li><a href="1">Sobre nosotros</a></li>
            <li><a href="1">Proyectos</a></li>
            <li><a href="1">Contacto</a></li>
        </ul>
        <ul>
            <li><a href="1"><FaInstagram></FaInstagram></a></li>
            <li><a href="1"><FaTwitter></FaTwitter></a></li>
            <li><a href="1"><AiOutlineMail></AiOutlineMail></a></li>
            <li><a href="1"></a><FaGooglePlus></FaGooglePlus></li>
        </ul>
    </HeaderStyles>
);
}

export default HeaderStyled