import React from "react";
import axios from "axios";
import PaginaCadastro from "./components/PaginaCadastro.component";
import PaginaLista from "./components/PaginaLista.component";
import PaginaInfo from "./components/PaginaInfo.component";
import Botao from "./components/Botao.component";

export default class App extends React.Component {
  state = {
    paginaAtual: "Cadastro",
    valorBotao: "Ir para a página da lista",
    listaDeUsuarios: [],
    nameInput: "",
    emailInput: "",

    usuarioAtual: {
      email: '',
      nome: ''
    }
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
        {
          headers: {
            Authorization: "hugo-lacerda-julian",
          },
        }
      )
      .then((res) => {
        this.setState({ listaDeUsuarios: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handleEmailChange = (e) => {
    this.setState({ emailInput: e.target.value });
    console.log(this.state.emailInput);
  };
  handleNameChange = (e) => {
    this.setState({ nameInput: e.target.value });
    console.log(this.state.nameInput);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.adicionarUsuario();
    console.log(this.state.listaDeUsuarios);
    this.setState({ emailInput: "", nameInput: "" });
  };

  adicionarUsuario = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
        body,
        {
          headers: {
            Authorization: "hugo-lacerda-julian",
          },
        }
      )
      .then((res) => {
        this.pegaUsuarios();
        window.alert("Usuário adicionado com sucesso", res);
      })
      .catch((err) => {
        window.alert("Ocorreu um erro", err.response);
      });
  };

  deleteOnClick = (e) => {
    const key = e.target.getAttribute("data-key");

    if (window.confirm("Tem certeza que deseja deletar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${key}`,
          {
            headers: {
              Authorization: "hugo-lacerda-julian",
            },
            params: {
              id: key,
            },
          }
        )
        .then((res) => {
          this.pegaUsuarios();
          window.alert("Usuário excluído com sucesso", res);
        })
        .catch((err) => {
          window.alert("Ocorreu um erro", err.response);
        });
    }
  };

  handlePagina = (e) => {
    e.preventDefault();

    if (this.state.paginaAtual === "Cadastro") {
      this.setState({
        paginaAtual: "Lista",
        valorBotao: "Ir para a página de cadastro",
      });
    } else if(this.state.paginaAtual === "Lista"){
      this.setState({
        paginaAtual: "Cadastro",
        valorBotao: "Ir para a página da lista",
      });
    }else if(this.state.paginaAtual === "UserInfo"){
      this.setState({
        paginaAtual: "Lista",
        valorBotao: "Ir para a página de cadastro",
        usuarioAtual:{
          nome:'',
          email:''
        }
      });
    }
  };

  onClickInfo = (e) =>{
    e.preventDefault();

    const key = e.target.getAttribute('data-key');

    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${key}`, {
      headers: {
        Authorization: "hugo-lacerda-julian",
      },
      params: {
        id: key,
      },
    }
  )
  .then((res) => {
    this.pegaUsuarios();
    this.setState({usuarioAtual: {email: res.data.email, nome: res.data.name}});
  })
  .catch((err) => {
    console.log("Ocorreu um erro", err);
  }).then(this.setState({paginaAtual: "UserInfo", valorBotao: "Voltar"}))
  }
  render() {
    const paginaAtual = () => {
      if (this.state.paginaAtual === "Cadastro") {
        return (
          <PaginaCadastro
            onChangeName={this.handleNameChange}
            onChangeEmail={this.handleEmailChange}
            emailValue={this.state.emailInput}
            nameValue={this.state.nameInput}
            onClick={this.onSubmit}
          />
        );
      } else if(this.state.paginaAtual === "Lista"){
        return (
          <PaginaLista
            lista={this.state.listaDeUsuarios}
            onClickDel={this.deleteOnClick} onClickInfo={this.onClickInfo}
          />
        );
      } else if(this.state.paginaAtual === "UserInfo"){
        return (
          <PaginaInfo nome={this.state.usuarioAtual.nome} email={this.state.usuarioAtual.email} />
        )
      }
    };
    return (
      <div className="App">
        {paginaAtual()}

        <Botao acao={this.state.valorBotao} onClick={this.handlePagina} />
      </div>
    );
  }
}
