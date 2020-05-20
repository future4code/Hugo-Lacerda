import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Card} from "@material-ui/core"
import styled from "styled-components"

const FormStyle = styled.form`
display: grid;
grid-template-columns: auto-fill;
grid-gap: 20px;
margin: 20px 200px 40px 200px;
@media screen and (max-width:800px){
    margin: 20px 100px 40px 100px;
}
@media screen and (max-width:600px){
    margin: 20px 0px 40px 0px;
}
`
const TituloForm = styled.h1`
text-align: center;
`

const TripForm = () => {

const {register, handleSubmit} = useForm();

const onSubmit = (data) =>{
    console.log(data)
}

  return (
    <div>
      <Card>
      <TituloForm>Formulário de Inscrição</TituloForm>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <TextField type="text" variant="outlined" label="Id" name="id" inputRef={register}/>
            <TextField variant="outlined" label="Nome" name="name" inputRef={register}/>
            <TextField variant="outlined" label="Planeta" name="planet" inputRef={register}/>
            <TextField variant="outlined" label="Data" name="date" inputRef={register}/>
            <TextField variant="outlined" label="Descrição" name="description" multiline rows="10" inputRef={register}/>
            <TextField variant="outlined" label="Duração em dias" name="durationInDays" inputRef={register}/>
            <Button type="submit">Enviar inscrição</Button>
        </FormStyle>
        </Card>
    </div>
  );
};

export default TripForm;