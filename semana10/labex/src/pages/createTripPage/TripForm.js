import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Card,
  FormControl,
  InputLabel,
  Select,
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

const TripForm = () => {
  const { register, handleSubmit } = useForm();
  const [planet, setPlanet] = useState("");

  const onSubmit = (data) => {
    const auth = window.localStorage.getItem("token");
    console.log(auth);
    const headers = {
      "Content-Type": "application/json",
      auth: auth,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/trips`,
        data,
        { headers: headers }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handlePlanetChange = (e) => {
    setPlanet(e.target.value);
  };

  const dateNow = () =>{
    console.log(new Date().toISOString().substring(0,10))
  }
  return (
    <div>
      <CardStyle>
        <TituloForm>Formulário de Inscrição</TituloForm>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            label="Nome"
            name="name"
            inputRef={register}
            inputProps={{
              pattern: "[A-Za-z ]{5,}",
              title: "O nome da viagem deve conter no mínimo 5 letras",
            }}
            required
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="planets-label">Planeta</InputLabel>
            <Select
              native
              value={planet}
              onChange={handlePlanetChange}
              label="Planeta"
              inputProps={{
                name: "planet",
                id: "planets-label",
                pattern: "[A-Za-z ]{1,}",
                title: "Escolha um dos planetas",
              }}
              inputRef={register}
              required
            >
              <option aria-label="None" value="" />
              <option value="Mercurio">Mercurio</option>
              <option value="Venus">Venus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Uranu">Uranu</option>
              <option value="Netuno">Netuno</option>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            label="Data"
            type="date"
            name="date"
            inputRef={register}
            format= "YYYY-MM-DD"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
            }}
            required
          />
          <TextField
            variant="outlined"
            label="Descrição"
            name="description"
            rows="10"
            inputRef={register}
            inputProps={{
              pattern: "[A-Za-z ]{30,}",
              minlenght: 30,
              title: "A descrição deve conter no mínimo 30 letras"
            }}
            required
          />
          <TextField
            variant="outlined"
            type="number"
            label="Duração em dias"
            name="durationInDays"
            inputProps={
              {
                min: 50,
              }
            }
            inputRef={register}
            required
          />
          <Button type="submit">Enviar inscrição</Button>
        </FormStyle>
      </CardStyle>
      <Button onClick={dateNow}>DATA</Button>
    </div>
  );
};

export default TripForm;
