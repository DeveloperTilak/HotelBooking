import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
background-color:var( --btnColor);
color: white;
font-size: 15px;
padding: 12px;
border: none;
cursor:pointer;

`
const Button =(props)=>{
    return(
        <ButtonStyled onClick={props.onClick} className= {props.className} type='button'>{props.button}</ButtonStyled>
    )
}

export default Button;