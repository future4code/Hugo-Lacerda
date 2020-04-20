import React from 'react';
import styled from 'styled-components';

const H1Center = styled.h1`
text-align: center;
margin: 40px 0;
`

export default class Agradecimento extends React.Component{

    render(){
        return(
            <H1Center>Obrigado por participar, pessoa! Entraremos em contato em breve!</H1Center>
        )
    }
}