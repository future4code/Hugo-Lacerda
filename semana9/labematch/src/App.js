import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button } from "@material-ui/core";
import "./App.css";
import TelaInicial from './componentes/telaInicial/TelaInicial'
import TelaMatches from './componentes/telaMatches/TelaMatches'
import axios from 'axios'
const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #d1d1d1;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const SPContainer = styled(Card)`
  && {
    height: 600px;
    width: 390px;
    background-color: #fff;
    border: 0.5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
  }
`;

const ResetButton = styled(Button)`
  && {
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: #f1f1f1;
    border: 0.5px solid black;
    :hover {
      font-weight: bolder;
      color: white;
      background-color: crimson;
    }
  }
`;

function App() {

  const [paginaAtual, setPaginaAtual] = useState('TelaInicial');

const pageHandler = () =>{

  if(paginaAtual === 'TelaInicial'){
    setPaginaAtual('TelaMatches')
  }else{
    setPaginaAtual('TelaInicial')
  }

}

const resetAll = () => {
  axios
  .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/clear`)
}
  return (
    <MainContainer>
      <SPContainer variant="outlined">
        { paginaAtual === 'TelaInicial' ?
          <TelaInicial pageHandler={pageHandler}/> :
          <TelaMatches pageHandler={pageHandler}/> 
          }
      </SPContainer>
      <ResetButton size="small" onClick={resetAll}>Reset total</ResetButton>
    </MainContainer>
  );
}

export default App;
