import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import userFormValidation from "../../userValidation/userFormValidation";

import { Button, TextField, Card, Select } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";

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
  width: 400px;
  margin: 0 auto;
`;

const LoginForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   var canPass = false;
  //   axios
  //     .post(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/login`,
  //       data
  //     )
  //     .then((res) => {
  //       if(res.status === 200){
  //         history.push("/admin/trip_list");
  //       }
  //     })
  //     .catch((err) => console.log(err));

  //     console.log(canPass)

  //     if(canPass){
  //       history.push("/admin/trip_list");
  //     }
  // };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hugo/login`, data);
      localStorage.setItem("token", response.data.token);
      history.push("/admin/trip_list");
    } catch (e) {
      alert("Login falhou :(");
    }
  };
  
  return (
    <CardStyle>
      <FormStyle onSubmit={handleSubmit(handleLogin)}>
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          name="email"
          inputRef={register}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Senha"
          name="password"
          inputRef={register}
        />
        <Button type="submit">Entrar</Button>
      </FormStyle>
    </CardStyle>
  );
};

export default LoginForm;
