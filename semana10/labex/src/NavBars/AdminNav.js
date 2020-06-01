import React from "react";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import { Button, Card } from "@material-ui/core";

const StyledCard = styled(Card)`
  && {
    background-color: blueviolet;
    max-width: 100vw;
    border-radius: 0;
    display: flex;
    justify-content: flex-end;
    Button {
      color: white;
      border-radius: 0;
      padding: 20px 40px;
    }
    margin-bottom: 30px;
  }
`;

const LogoutButton = styled(Button)`
  && {
    background-color: rgb(220, 20, 60, 0.5);
    width: 5%;
    margin-left: 7.5%;
    :hover {
      background-color: rgb(220, 20, 60, 0.9);
      font-weight: bold;
    }
  }
`;
const RegularButton = styled(Button)`
  && {
    border-right: 0;
  }
`;
const AdminNav = () => {
  const pathParams = useParams();
  const history = useHistory();
  const goToCreateTripPage = () => {
    history.push("/admin/create_trip");
  };
  const goToAdminLoginPage = () => {
    history.push("/admin/login");
  };
  const goToTripListAdminPage = () => {
    history.push("/admin/trip_list");
  };
  const handleLogout = () => {
    window.localStorage.clear();
    goToAdminLoginPage();
  };
  return (
    <StyledCard>
      <RegularButton variant="outlined" onClick={goToTripListAdminPage}>Visualizar viagens</RegularButton>
      <Button variant="outlined" onClick={goToCreateTripPage}>Adicionar viagem</Button>
      <LogoutButton variant="outlined" onClick={handleLogout}>Sair</LogoutButton>
    </StyledCard>
  );
};

export default AdminNav;
