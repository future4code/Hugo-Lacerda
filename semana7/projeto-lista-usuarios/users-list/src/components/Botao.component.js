import React from 'react';

export default class Botao extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.onClick}>{this.props.acao}</button>
            </div>
        )
    }
}