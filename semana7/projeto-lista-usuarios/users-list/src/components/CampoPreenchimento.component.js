import React from 'react';

export default class CampoPreenchimento extends React.Component{
    
    render(){
        return(
            <div>
            <label>{this.props.label}</label>
            <input placeholder={this.props.finalidade} onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}