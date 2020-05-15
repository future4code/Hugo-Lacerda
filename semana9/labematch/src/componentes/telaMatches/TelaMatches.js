import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardHeader } from "@material-ui/core";
import Matches from "@material-ui/icons/People";
import Swipe from "@material-ui/icons/PersonAdd";
import axios from "axios";

const SPContainerHeader = styled(CardHeader)`
  && {
    width: 100%;
    border-bottom: 0.5px black solid;
    text-align: center;
    margin: 0 auto;
  }
`;

const SwipeMoreIcon = styled(Swipe)`
  && {
    position: absolute;
    left: 10px;
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
const MatchesSect = styled.div`
  width: 100%;
`;
const ProfileImg = styled.img`
  max-height: 50px;
  min-height: 50px;
  min-width: 50px;
  max-width: 50px;
  border-radius: 100%;
  object-fit: contain;
`;
const ProfileImgBox = styled.span`
  height: 50px;
  width: 50px;
    border-radius: 100%;
    margin-right: 10px;

`;
const ProfileMin = styled.p`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-left: 10px;
`;

function TelaMatches(props) {

    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hugo/matches`)
        .then(res =>{
            if(mounted){
            setMatches(res.data.matches)
            }
        })
        .catch(err => {
            console.log(err);
        })
    
        return () => mounted = false;


    }, [ matches ])

    const listaMatches = matches.map( match => {
        return (
        <ProfileMin key={match.key}><ProfileImgBox><ProfileImg src={match.photo}/></ProfileImgBox> <strong>{match.name}</strong></ProfileMin>
        )
    })
    return (
    <MainDiv>
      <SPContainerHeader title="LabeMatch" />
      <SwipeMoreIcon onClick={props.pageHandler} />
      <MatchesSect>
          {listaMatches}
      </MatchesSect>
    </MainDiv>
  );
}

export default TelaMatches;
