import React from 'react';
import styled from 'styled-components';

const FormBonito = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 180px;
margin-top: 40px;
`

export default class Fase2 extends React.Component{

    render(){
        return(
            <FormBonito>
            <h1>FASE 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
            <label>5. Curso:</label><input/>
            <label>6. Unidade de ensino:</label><input/>
            </FormBonito>
        )
    }
}