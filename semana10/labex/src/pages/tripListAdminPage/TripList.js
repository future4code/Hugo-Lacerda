import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Garbage from "@material-ui/icons/DeleteForever"
import More from "@material-ui/icons/More"
import { Link } from "react-router-dom";

import {
  Button,
  TextField,
  Card,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import AdminNav from "../../NavBars/AdminNav";
const StyledCard = styled(Card)`
  && {
    position: relative;
    width: 800px;
    margin: 20px auto;
    height: 100px;
  }
`;
const StyledTitle = styled(Typography)`
  && {
    padding: 10px 10px;
  }
`;

const SeeMore = styled(Button)`
&&{
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: rgb(60,179,113,0.5);
  :hover{
    background-color: rgb(60,179,113, 0.9);
    font-weight: bold;
  }
}
`
const Delete = styled(Button)`
&&{
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: rgb(220, 20, 60, 0.5);
  :hover{
    background-color: rgb(220, 20, 60, 0.9);
    font-weight: bold;
  }
}
`
const TripList = () => {
  const [trip, setTrip] = useState("");
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips`
      )
      .then((res) => setTripList(res.data.trips))
      .catch((err) => console.log(err));
  }, [tripList]);

  const deleteTrip = (e) =>{
    const id = e.currentTarget.getAttribute("id");

    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  const goToDetails = () =>{

  }
  return (
    <div>
      {tripList.map((trip) => {
        return (
          <StyledCard value={trip.id}>
            <StyledTitle variant="h5">{trip.name}</StyledTitle>
            <Delete onClick={deleteTrip} id={trip.id}><Garbage/></Delete>
            <Link to={`/admin/trip_list/${trip.id}`}><SeeMore><More/></SeeMore></Link>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default TripList;
