import React from 'react';

export default class PaginaLista extends React.Component{

    render(){
        return(
            <ul>
                {this.props.lista.map(usuario =>{
                    return (
                        <li key={usuario.id} data-key={usuario.id}><span onClick={this.props.onClickInfo} data-key={usuario.id}>{usuario.name}</span> ||| <strong onClick={this.props.onClickDel} data-key={usuario.id}>X</strong></li>
                    )
                })}
            </ul>
        )
    }
}