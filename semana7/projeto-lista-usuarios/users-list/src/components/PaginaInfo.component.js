import React from 'react';
import Botao from './Botao.component';

export default class PaginaInfo extends React.Component{

    render(){
        return(
            <div>
            <ul>
                <li><strong>Nome:</strong> {this.props.nome}</li>
                <li><strong>Email:</strong> {this.props.email}</li>
            </ul>
            <Botao acao="Editar" onClick={this.props.onClickEdit} />
            </div>
        )
    }
}