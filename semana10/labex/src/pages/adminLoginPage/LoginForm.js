import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
`

const LoginForm = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <CardStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
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