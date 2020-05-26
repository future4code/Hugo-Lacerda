import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core';
import LoginForm from "./LoginForm"

const AdminLoginPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToTripListAdminPage = () => {
    history.push("/admin/trip_list");
  };
  const goToCreateTripPage = () => {
    history.push("/admin/create_trip");
  };

  return (
    <div>
      <h1>Admin Login Page</h1>
      <LoginForm/>
      <Button variant='outlined' color='secondary' onClick={goToTripListAdminPage}>Ver lista</Button>
      <Button variant='outlined' color='secondary' onClick={goToCreateTripPage}>Criar viagem</Button>
      <Button variant='contained' onClick={goToHomePage}>Voltar para a página inicial</Button>
    </div>
  );
};

export default AdminLoginPage;