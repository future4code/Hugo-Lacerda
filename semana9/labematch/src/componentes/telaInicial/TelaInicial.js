import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { CardHeader } from "@material-ui/core";
import Matches from "@material-ui/icons/People";
import Swipe from "@material-ui/icons/PersonAdd";
import CampoSwipe from './CampoSwipe'
import CampoPerfil from './CampoPerfil'
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
    :hover{
      cursor: pointer;
    }
  }
`;

const MainDiv = styled.div`
position: relative;
width: 100%;
`

function TelaInicial(props) {

  const [ id, setId ] = useState('');
  const [ perfil, setPerfil ] = useState({});

  useEffect(() => {
  let mounted = true;
  axios.
  get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/person`)
  .then( res => {
    if(mounted){
    setId(res.data.profile.id);
    setPerfil(res.data.profile);
    }
  }
    )
  .catch(err => 
    console.log(err)
    )

    return () => mounted = false;

  }, [])

  const onHeartClick = () => {
    match();
    axios.
    get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/person`)
    .then( res => {
      setId(res.data.profile.id);
      setPerfil(res.data.profile);
    }
      )
    .catch(err => 
      console.log(err)
      )
    }
  const onXClick = () => {
    unmatch();
    axios.
    get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/person`)
    .then( res => {
      setId(res.data.profile.id);
      setPerfil(res.data.profile);
    }
      )
    .catch(err => 
      console.log(err)
      )
    }

  const match = () =>{
    axios.
    post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/choose-person`, {
      id: id,
      choice: true
    })
    .then( res => {
      console.log(res)
        }
      )
    .catch(err => 
      console.log(err)
      )
    }
  const unmatch = () =>{
    axios.
    post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/choose-person`, {
      id: id,
      choice: false
    })
    .then( res => {
      console.log(res)
        }
      )
    .catch(err => 
      console.log(err)
      )
    }

  return (
    <MainDiv>
      <MatchesIcon onClick={props.pageHandler} />
      <SPContainerHeader title="LabeMatch" />
      <CampoPerfil perfil={perfil}/>
      <CampoSwipe onHeartClick={onHeartClick} onXClick={onXClick} />
    </MainDiv>
  );
}

export default TelaInicial;
