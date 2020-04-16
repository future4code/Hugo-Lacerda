// import React from "react";
// import "./Post.css";

// import { IconeComContador } from "../IconeComContador/IconeComContador";

// import iconeCoracaoBranco from "../../img/favorite-white.svg";
// import iconeCoracaoPreto from "../../img/favorite.svg";
// import iconeComentario from "../../img/comment_icon.svg";
// import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

// class Post extends React.Component {
// //   state = {
// //     // curtido: false,
// //     // numeroCurtidas: 0,
// //     // comentando: false,
// //     // numeroComentarios: 0,

// //     posts: [
// //       {
// //         nomeUsuario: "paulinha",
// //         fotoUsuario: "https://picsum.photos/id/200/50/50",
// //         fotoPost: "https://picsum.photos/id/427/200/150",
// //         curtido: false,
// //         foiCurtido: () => {
// //           if (this.curtido === true) {
// //               this.numeroCurtidas = this.numeroCurtidas + 1;
          
// //           } else {
// //               this.numeroCurtidas = this.numeroCurtidas - 1;
// //             };
// //           },
// //         numeroCurtidas: 0,
// //         comentando: false,
// //         numeroComentarios: 0,
// //       },
// //       {
// //         nomeUsuario: "louisinha",
// //         fotoUsuario: "https://picsum.photos/id/106/50/50",
// //         fotoPost: "https://picsum.photos/id/222/200/150",
// //         curtido: false,
// //         numeroCurtidas: 0,
// //         comentando: false,
// //         numeroComentarios: 0
// //       },
// //       {
// //         nomeUsuario: "pedrinha",
// //         fotoUsuario: "https://picsum.photos/id/187/50/50",
// //         fotoPost: "https://picsum.photos/id/322/200/150",
// //         curtido: false,
// //         numeroCurtidas: 0,
// //         comentando: false,
// //         numeroComentarios: 0
// //       },
// //     ],
// //   };

// //   isCurtido = () => {
// //     if (this.state.curtido === true) {
// //       this.setState({
// //         numeroCurtidas: this.state.numeroCurtidas + 1,
// //       });
// //     } else {
// //       this.setState({
// //         numeroCurtidas: this.state.numeroCurtidas - 1,
// //       });
// //     }
// //   };
// //   onClickCurtida = () => {
// //     this.setState(
// //       {
// //         curtido: !this.state.curtido,
// //       },
// //       this.isCurtido
// //     );
// //   };

// //   onClickComentario = () => {
// //     this.setState({
// //       comentando: !this.state.comentando,
// //     });
// //   };

// //   aoEnviarComentario = () => {
// //     this.setState({
// //       comentando: false,
// //       numeroComentarios: this.state.numeroComentarios + 1,
// //     });
// //   };

// //   render() {
// //     let iconeCurtida;
// //     if (this.state.curtido) {
// //       iconeCurtida = iconeCoracaoPreto;
// //     } else {
// //       iconeCurtida = iconeCoracaoBranco;
// //     }

// //     let componenteComentario;

// //     if (this.state.comentando) {
// //       componenteComentario = (
// //         <SecaoComentario aoEnviar={this.aoEnviarComentario} />
// //       );
// //     }
// //     const listaDePosts = this.state.posts.map((post) => {
// //       return (
// //         <div className={"post-container"}>
// //           <div className={"post-header"}>
// //             <img
// //               className={"user-photo"}
// //               src={post.fotoUsuario}
// //               alt={"Imagem do usuario"}
// //             />
// //             <p>{post.nomeUsuario}</p>
// //           </div>

// //           <img
// //             className={"post-photo"}
// //             src={post.fotoPost}
// //             alt={"Imagem do post"}
// //           />

// //           <div className={"post-footer"}>
// //             <IconeComContador
// //               icone={iconeCurtida}
// //               onClickIcone={pessoa.foiCurtido}
// //               valorContador={pessoa.numeroCurtidas}
// //             />

// //             <IconeComContador
// //               icone={iconeComentario}
// //               onClickIcone={this.onClickComentario}
// //               valorContador={this.state.numeroComentarios}
// //             />
// //           </div>
// //           {componenteComentario}
// //         </div>
// //       );
// //     });

// //   return (<div>{listaDePosts}</div>);
// //   }
// // }

// // export default Post;
