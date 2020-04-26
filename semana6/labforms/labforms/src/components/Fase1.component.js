import React from 'react';
import styled from 'styled-components';

const FormBonito = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 280px;
margin-top: 40px;
`

export default class Fase1 extends React.Component{

    render(){
        return(
            <FormBonito>
            <h1>FASE 1 - DADOS GERAIS</h1>
            <label>1. Nome:</label><input/>
            <label>2. Idade:</label><input/>
            <label>3. E-mail:</label><input/>
            <label>4. Escolaridade:</label>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
            </FormBonito>
        )
    }
}