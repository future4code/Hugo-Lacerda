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

export default class Fase3 extends React.Component{

    render(){
        return(
            <FormBonito>
            <h1>FASE 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <label>5. Motivo da não conclusão da graduação:</label><input/>
            <label>6. Curso complementar:</label>       <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
            </FormBonito>
        )
    }
}