import React from 'react';
import './App.css';
// import Post from './components/Post/Post';
import { IconeComContador } from "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/components/IconeComContador/IconeComContador";
import styled from 'styled-components';
import iconeCoracaoBranco from "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/img/favorite-white.svg";
import iconeCoracaoPreto from "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/img/favorite.svg";
import iconeComentario from "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/img/comment_icon.svg";
import { SecaoComentario } from "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/components/SecaoComentario/SecaoComentario.js";
import "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/components/SecaoComentario/SecaoComentario.css";
import "C:/Users/tauba/Desktop/Hugo-Lacerda/semana5/instalab/src/components/Post/Post.css";

const BotaoEnvio = styled.button`
  outline: none;
  border: 1px brown solid;
  background-color: blanchedalmond;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 20px 0;
`
const InputManeiro = styled.input`
  -webkit-appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px brown solid;
  border-radius: 2px;
  padding: 5px;
  margin: 10px 0;
`
const DivMarginTop = styled.div`
  margin:20px 0;
`
const FormBorder = styled.form`
  border: 1px black solid;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
`

class App extends React.Component {
  state = {
    // curtido: false,
    // numeroCurtidas: 0,
    // comentando: false,
    // numeroComentarios: 0,

    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/200/50/50",
        fotoPost: "https://picsum.photos/id/427/200/150",
        curtido: false,
        onClickCurtir: () => {
          this.curtido = !this.curtido;
          if (this.curtido === true) {
              this.numeroCurtidas = this.numeroCurtidas + 1;
          } else {
              this.numeroCurtidas = this.numeroCurtidas - 1;
            }
    },
        numeroCurtidas: 0,
        comentando: false,
        numeroComentarios: 0,
      },
      {
        nomeUsuario: "louisinha",
        fotoUsuario: "https://picsum.photos/id/106/50/50",
        fotoPost: "https://picsum.photos/id/222/200/150",
        curtido: false,
        onClickCurtir: () => {
                this.curtido = !this.curtido;
                if (this.curtido === true) {
                    this.numeroCurtidas = this.numeroCurtidas + 1;
                } else {
                    this.numeroCurtidas = this.numeroCurtidas - 1;
                  }
          },
        numeroCurtidas: 0,
        comentando: false,
        numeroComentarios: 0
      },
      {
        nomeUsuario: "pedrinha",
        fotoUsuario: "https://picsum.photos/id/187/50/50",
        fotoPost: "https://picsum.photos/id/322/200/150",
        curtido: false,
        onClickCurtir: () => {
          this.curtido = !this.curtido;
          if (this.curtido === true) {
              this.numeroCurtidas = this.numeroCurtidas + 1;
          } else {
              this.numeroCurtidas = this.numeroCurtidas - 1;
            }
    },
        numeroCurtidas: 0,
        comentando: false,
        numeroComentarios: 0
      },
    ],
    valorInputUsername: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""
  };

  adPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsername,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    };
    const novoPosts = [...this.state.posts, novoPost];
    this.setState({posts: novoPosts}, () => {
      this.setState({valorInputUsername: '', valorInputFotoPerfil:'', valorInputFotoPost:''})
    })
  }

  onChangeInputUsername = e =>{
    this.setState({valorInputUsername: e.target.value});
  }
  onChangeInputPerfilPic = e =>{
    this.setState({valorInputFotoPerfil: e.target.value});
  }
  onChangeInputFotoPost = e =>{
    this.setState({valorInputFotoPost: e.target.value});
  }

  // isCurtido = () => {
  //   if (this.state.curtido === true) {
  //     this.setState({
  //       numeroCurtidas: this.state.numeroCurtidas + 1,
  //     });
  //   } else {
  //     this.setState({
  //       numeroCurtidas: this.state.numeroCurtidas - 1,
  //     });
  //   }
  // };
  // onClickCurtida = () => {
  //   this.setState(
  //     {
  //       curtido: !this.state.curtido,
  //     },
  //     this.isCurtido
  //   );
  // };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src={post.fotoUsuario}
              alt={"Imagem do usuario"}
            />
            <p>{post.nomeUsuario}</p>
          </div>

          <img
            className={"post-photo"}
            src={post.fotoPost}
            alt={"Imagem do post"}
          />

          <div className={"post-footer"}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={post.onClickCurtir}
              valorContador={post.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={post.onClickComentario}
              valorContador={post.numeroComentarios}
            />
          </div>
          {componenteComentario}
        </div>
      );
    });
    return(
      <DivMarginTop className={'app-container'}>
      <FormBorder>
      <InputManeiro value={this.state.valorInputUsername} placeholder="Nome de usuário" onChange={this.onChangeInputUsername} /><InputManeiro value={this.state.valorInputFotoPerfil} placeholder="Foto de perfil" onChange={this.onChangeInputPerfilPic} /><InputManeiro value={this.state.valorInputFotoPost} placeholder="Foto do post" onChange={this.onChangeInputFotoPost} /><BotaoEnvio onClick={this.adPost}>Postar!</BotaoEnvio>
      </FormBorder>
       <div>{listaDePosts}</div>
      </DivMarginTop>
    )
  }
}

export default App;
