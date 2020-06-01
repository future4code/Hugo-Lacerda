import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Card,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

const FormStyle = styled.form`
  display: grid;
  grid-template-columns: auto-fill;
  grid-gap: 20px;
  margin: 20px 30px 40px 30px;
  @media screen and (max-width: 800px) {
    margin: 20px 100px 40px 100px;
  }
  @media screen and (max-width: 600px) {
    margin: 20px 0px 40px 0px;
  }
`;

const CardStyle = styled(Card)`
  width: 800px;
  margin: 0 auto;
`;

const TituloForm = styled.h1`
  text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: 120,
  },
  inputLabel: {
    paddingLeft: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ApplicantForm = () => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [trip, setTrip] = useState("");
  const [country, setCountry] = useState("");
  const [tripList, setTripList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips`
      )
      .then((res) => setTripList(res.data.trips))
      .catch((err) => console.log(err));
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => setCountriesList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleTripChange = (e) => {
    setTrip(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const onSubmit = (data) => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips/${data.trip}/apply`,
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CardStyle>
        <TituloForm>Formulário de Inscrição</TituloForm>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            variant="outlined"
            label="Nome"
            name="name"
            inputRef={register}
            inputProps={{
              pattern: `[A-Za-z]{3,}`,
              title: "O nome deve conter no mínimo 3 letras ",
            }}
            required
          />
          <TextField
            variant="outlined"
            type="number"
            label="Idade"
            name="age"
            inputRef={register}
            inputProps={{
              min: 18,
              title: "É preciso ter ao menos 18 anos para se candidatar",
            }}
            required
          />
          <TextField
            variant="outlined"
            label="Por que se considera um bom candidato?"
            name="applicationText"
            rows="10"
            inputRef={register({pattern: /^[\w\s.,:;!?€¥£¢$-]{30,}$/, title: "A descrição deve conter no mínimo 30 letras"})}
            multiline
            required
          />
          <TextField
            variant="outlined"
            label="Profissão"
            name="profession"
            inputRef={register}
            inputProps={{
              pattern: "[A-Za-z]{10,}",
              title: "Este campo deve conter ao menos 10 letras.",
            }}
            required
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="pais-label">País de origem</InputLabel>
            <Select
              native
              value={country}
              onChange={handleCountryChange}
              label="País de origem"
              inputProps={{
                name: "country",
                id: "country-label",
              }}
              inputRef={register}
            >
              <option aria-label="None" value="" required />
              {countriesList.map((country) => {
                return <option value={country.name}>{country.name}</option>;
              })}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="viagem-label">Viagem</InputLabel>
            <Select
              native
              value={trip}
              onChange={handleTripChange}
              label="Viagem"
              inputProps={{
                name: "trip",
                id: "viagem-label",
              }}
              inputRef={register}
            >
              <option aria-label="None" value="" />
              {tripList.map((trip) => {
                return (
                  <option value={trip.id}>
                    {trip.name} - {trip.planet}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Button type="submit">Enviar inscrição</Button>
        </FormStyle>
      </CardStyle>
    </div>
  );
};

export default ApplicantForm;
