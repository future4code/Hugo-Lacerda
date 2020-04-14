import React from 'react';
import './CardPequeno.css';

export const CardPequeno = props => {
    return <div className='card-pequeno'>
        <img src={props.icone} />
        <h3>{props.motivo}</h3> 
        <p>{props.texto}</p>
    </div>;
}