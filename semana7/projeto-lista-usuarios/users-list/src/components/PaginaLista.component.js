import React from 'react';

export default class PaginaLista extends React.Component{

    render(){
        return(
            <ul>
                {this.props.lista.map(usuario =>{
                    return (
                        <li>{usuario.name}</li>
                    )
                })}
            </ul>
        )
    }
}