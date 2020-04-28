import React from 'react';
import CampoPreenchimento from './CampoPreenchimento.component';
import Botao from './Botao.component';

export default class PaginaCadastro extends React.Component{

    render(){
        return(
        <form>
        <CampoPreenchimento label='Nome: ' finalidade='nome' onChange={this.props.onChangeName} value={this.props.nameValue}/>
        <CampoPreenchimento label='Email: ' finalidade='email' onChange={this.props.onChangeEmail} value={this.props.emailValue}/>
        <Botao acao='Cadastrar' onClick={this.props.onClick}/>
        </form>
        )
    }
}