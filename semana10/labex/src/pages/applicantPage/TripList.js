import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Card, Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

const Paragraph = styled.p`
  padding-left: 10px;
`;

const CardStyle = styled(Card)`
  max-width: 800px;
  margin: 50px auto;

`;

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
              <CardStyle>
              <Paragraph>
                <strong>Viagem:</strong> {trip.name}
              </Paragraph>
              <Paragraph>
                <strong>Planeta:</strong> {trip.planet}
              </Paragraph>
              <Paragraph>
                <strong>Descrição:</strong> {trip.description}
              </Paragraph>
              <Paragraph>
                <strong>Data:</strong> {trip.date}
              </Paragraph>
              <Paragraph>
                <strong>Duração em dias:</strong> {trip.durationInDays}
              </Paragraph>
            </CardStyle>
            )
          })}
      </div>
  );
}

export default TripList;
