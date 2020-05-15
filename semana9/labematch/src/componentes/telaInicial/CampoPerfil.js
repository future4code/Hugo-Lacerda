import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";

const Profile = styled(Card)`
  && {
    height: 400px;
    margin: 10px 40px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 1px 3px 3px 3px gray;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    line-height: 20px;
  }
`;
const Descricao = styled.div`
  && {
    color: white;
    p{
      padding: 5px 10px 10px 10px;
      margin: 0;
      font-size:1.2rem;
    }
    strong{
      font-size: 1.6rem;
    }
  }
`;

function CampoPerfil(props) {

  const [ perfilAtual, setPerfilAtual ] = useState({});

  useEffect(() => {
   setPerfilAtual(props.perfil)
  }, [ props.perfil ]
  )

  let divStyle = {
    backgroundImage: "url(" + perfilAtual.photo + ")",
  };

  return <Profile style={divStyle}>
    <Descricao>
<p><strong>{perfilAtual.name}</strong>, {perfilAtual.age}</p>
<p>{perfilAtual.bio}</p>
      </Descricao>
  </Profile>;
}

export default CampoPerfil;
