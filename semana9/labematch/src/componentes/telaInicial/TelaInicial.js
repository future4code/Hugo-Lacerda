import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardHeader } from "@material-ui/core";
import Matches from "@material-ui/icons/People";
import Swipe from "@material-ui/icons/PersonAdd";
import CampoSwipe from "./CampoSwipe";
import CampoPerfil from "./CampoPerfil";
import axios from "axios";

const SPContainerHeader = styled(CardHeader)`
  && {
    width: 100%;
    border-bottom: 0.5px black solid;
    text-align: center;
  }
`;

const MatchesIcon = styled(Matches)`
  && {
    position: absolute;
    right: 10px;
    top: 15px;
    font-size: 2rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const MainDiv = styled.div`
  position: relative;
  width: 100%;
`;

const Carregando = styled.p`
  margin-left: 20px;
  font-weight: bold;
  `

function TelaInicial(props) {
  const [perfil, setPerfil] = useState(undefined);

  const pegarPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/person`
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
  };

  const escolhaPerfil = (isMatch) => {
    const body = {
      id: perfil.id,
      choice: isMatch,
    };
    setPerfil(undefined);
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/choose-person`,
        body
      )

      pegarPerfil();
  };

  useEffect(() => pegarPerfil(), []);

  const onHeartClick = () => {
    escolhaPerfil(true);
  };

  const onXClick = () => {
    escolhaPerfil(false);
  };

  return (
    <MainDiv>
      <MatchesIcon onClick={props.pageHandler} />
      <SPContainerHeader title="LabeMatch" />
      {perfil ? (
        <>
          <CampoPerfil perfil={perfil} />
          <CampoSwipe onHeartClick={onHeartClick} onXClick={onXClick} />
        </>
      ) : <Carregando>Carregando...</Carregando>}
    </MainDiv>
  );
}

export default TelaInicial;
