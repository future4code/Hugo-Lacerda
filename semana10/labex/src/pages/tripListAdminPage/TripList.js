import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Card, Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import AdminNav from "../../NavBars/AdminNav"

const TripList = () => {
  const [trip, setTrip] = useState('');
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips`)
    .then(res => setTripList(res.data.trips))
    .catch(err => console.log(err))
}, [])

  return (
      <div>
          {tripList.map(trip => {
            return (
              <Card value={trip.id}>{trip.name}</Card>
            )
          })}
      </div>
  );
}

export default TripList;
