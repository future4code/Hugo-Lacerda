import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import AdminNav from "../../NavBars/AdminNav";
import { Card, Button } from "@material-ui/core";
import Up from "@material-ui/icons/ThumbUp";
import Down from "@material-ui/icons/ThumbDown";
import styled from "styled-components";

const CardStyle = styled(Card)`
  position: relative;
  max-width: 800px;
  margin: 50px auto;

`;
const Accept = styled(Button)`
  && {
    position: absolute;
    right: 10px;
    bottom: 50px;
    background-color: rgb(60, 179, 113, 0.5);
    :hover {
      background-color: rgb(60, 179, 113, 0.9);
      font-weight: bold;
      color: white;
    }
  }
`;
const Discard = styled(Button)`
  && {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgb(220, 20, 60, 0.5);
    :hover {
      background-color: rgb(220, 20, 60, 0.9);
      font-weight: bold;
      color: white;
    }
  }
`;
const Paragraph = styled.p`
  padding-left: 10px;
`;

const TripDetailsAdminPage = ({ match }) => {
  const pathParams = useParams();
  const history = useHistory();
  const auth = window.localStorage.getItem("token");
  const [candidates, setCandidates] = useState(undefined);
  const [trip, setTrip] = useState(undefined);
  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trip/${match.params.id}`,
        { headers: { auth: auth } }
      )
      .then((res) => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
      })
      .catch((err) => console.log(err));
  }, [match.params.id, candidates]);

  const handleApproval = (e) =>{
    const id = e.currentTarget.id;
    const tripId = trip.id;
    const isApproved = e.currentTarget.value;
    const auth = window.localStorage.getItem("token");
    const body = {
      approve: isApproved,
    }
    axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips/${tripId}/candidates/${id}/decide`, body, {headers:{auth:auth}})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <AdminNav />
      {trip ? (
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
        </CardStyle>
      ) : (
        <Paragraph>Carregando...</Paragraph>
      )}
      {candidates ? (
        <>
          {candidates.map((candidate) => {
            return (
              <CardStyle>
                <Paragraph>
                  <strong>Nome:</strong> {candidate.name}
                </Paragraph>
                <Paragraph>
                  <strong>Idade:</strong> {candidate.age}
                </Paragraph>
                <Paragraph>
                  <strong>Profissão:</strong> {candidate.profession}
                </Paragraph>
                <Paragraph>
                  <strong>Texto:</strong> {candidate.applicationText}
                </Paragraph>
                <Paragraph>
                  <strong>País:</strong> {candidate.country}
                </Paragraph>
                <Accept onClick={handleApproval} id={candidate.id} value={true}><Up/></Accept>
                <Discard onClick={handleApproval} id={candidate.id} value={false}><Down/></Discard>
              </CardStyle>
            );
          })}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default TripDetailsAdminPage;
