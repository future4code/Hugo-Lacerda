import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Fab } from "@material-ui/core";
import IsMatch from "@material-ui/icons/Favorite";
import NotMatch from "@material-ui/icons/Clear";

const MatchOrNot = styled.div`
  display: flex;
  justify-self: end;
  align-content: flex-end;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 10px;
  flex-basis: end;
`;
const Match = styled(Fab)`
  &&{
    height: 80px;
    width: 80px;
    color: green;
    border: green 0.5px solid;
    :hover{
      background-color: green;
      color: #f1f1f1;
    }
  }
`;
const NoMatch = styled(Fab)`
  &&{
    height: 80px;
    width: 80px;
    color: red;
    border: red 0.5px solid;
    :hover{
      background-color: red;
      color: #f1f1f1;
    }
  }
`;

function CampoSwipe(props) {
  return (
        <MatchOrNot>
          <NoMatch onClick={props.onXClick}>
            <NotMatch fontSize="large" />
          </NoMatch>
          <Match onClick={props.onHeartClick}>
            <IsMatch fontSize="large" />
          </Match>
        </MatchOrNot>
  );
}

export default CampoSwipe;