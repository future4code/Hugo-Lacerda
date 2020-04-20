import React from 'react';
import './App.css';
import styled from 'styled-components';
import Fase1 from './components/Fase1.component'
import Fase2 from './components/Fase2.component'
import Fase3 from './components/Fase3.component'
import Agradecimento from './components/Agradecimento.component'

const BotaoProx = styled.button`
display: table;
margin: 30px auto;
padding: 15px 30px;
`
const DivCenter = styled.div`
text-align: center;
`

class App extends React.Component {
  state = {
    fase: 1
  }

  renderizaFase = () =>{
    switch(this.state.fase){
      case 1:
        return <Fase1/>;
        break;
      case 2:
        return <Fase2/>;
        break;
      case 3:
        return <Fase3/>;
        break;
      case 4:
        return <Agradecimento/>;
        break;
      default:
        return <Fase1/>;
        break;
    }
  }

  renderizaBotao = () =>{
    switch(this.state.fase){
      case 1:
      case 2:
      case 3:
        return (<BotaoProx onClick={this.acresceFase}>Próxima</BotaoProx>);
        break;
      case 4:
        return <DivCenter>Mas, dependendo das respostas, talvez não.</DivCenter>;
        break;
    }
  }

  acresceFase = () => {
    let novaFase = this.state.fase+1;
    this.setState({fase: novaFase});
    console.log(this.state.fase);
    console.log(novaFase);
  }
  render(){
  return (
    <div>
     {this.renderizaFase()}
      {this.renderizaBotao()}
    </div>
  );
  }
}

export default App;
