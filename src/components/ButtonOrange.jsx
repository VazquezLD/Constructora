import React from "react";
import styled from "styled-components";

const ButtonOrStyles = styled.button`
    height: 30px;
    width: 150px;
    background-color: #d17206;
    border: none;
    cursor: pointer;
    border-radius: 0 0 7px 0;
`

const ButtonOrange = ({children}) => {
    return (
        <ButtonOrStyles>{children}</ButtonOrStyles>
    )
}

export default ButtonOrange