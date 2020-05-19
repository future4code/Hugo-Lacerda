import React from "react";
import { Button } from '@material-ui/core';
import { useParams, useHistory } from "react-router";

const HomePage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToAdminLoginPage = () => {
    history.push("/admin/login");
  };
  const goToApplicantPage = () => {
    history.push("/applicant_page");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Button variant='outlined' color='primary' onClick={goToApplicantPage}>Sou candidato</Button>
      <Button variant='outlined' color='secondary' onClick={goToAdminLoginPage}>Sou administrador</Button>
    </div>
  );
};

export default HomePage;