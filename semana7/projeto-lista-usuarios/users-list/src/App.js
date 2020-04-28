import React from 'react';
import axios from 'axios';
import PaginaCadastro from './components/PaginaCadastro.component';
import PaginaLista from './components/PaginaLista.component';
import Botao from './components/Botao.component';

export default class App extends React.Component {
 
  state = {
    listaDeUsuarios: [],
    nameInput: '',
    emailInput: ''
  }

  componentDidMount(){
    this.pegaUsuarios();
  }

  pegaUsuarios = () =>{
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
    {headers: {
      Authorization: 'hugo-lacerda-julian'
    }}).then(res =>{
      this.setState({listaDeUsuarios: res.data})
    }).catch(err =>{
      console.log(err.response);
    })
  }

  handleEmailChange = (e) => {
    this.setState({emailInput: e.target.value});
    console.log(this.state.emailInput)
  }
  handleNameChange = (e) => {
    this.setState({nameInput: e.target.value});
    console.log(this.state.nameInput)
  }

  onSubmit = (e) =>{
    e.preventDefault();
    this.adicionarUsuario();
    console.log(this.state.listaDeUsuarios);
    this.setState({emailInput: '', nameInput: ''});
  }

  adicionarUsuario = () =>{
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
    body,
    {
    headers: {
      Authorization: "hugo-lacerda-julian"
    }
  }
    ).then(res => {
      this.pegaUsuarios(); 
      window.alert("Usuário adicionado com sucesso", res);
    })
    .catch(err => {
      console.log("Ocorreu um erro", err.response);
    });
  }
  render(){
  return (
    <div className="App">
    <PaginaCadastro onChangeName={this.handleNameChange} onChangeEmail={this.handleEmailChange} emailValue={this.state.emailInput} nameValue={this.state.nameInput} onClick={this.onSubmit} />
    <Botao acao='Ir para a página da lista' />
    <PaginaLista lista={this.state.listaDeUsuarios} />
    </div>
  )
  }
}
