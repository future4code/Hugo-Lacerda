import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core'

const ApplicantPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToTripListApplicantPage = () => {
    history.push("/applicant_page/trip_list");
  };
  const goToApplicantFormPage = () => {
    history.push("/applicant_page/form");
  };

  return (
    <div>
      <h1>Applicant Page</h1>
      <Button variant='outlined' color='primary' onClick={goToTripListApplicantPage}>Ver lista</Button>
      <Button variant='outlined' color='primary' onClick={goToApplicantFormPage}>Candidatar-se</Button>
      <Button variant='contained' onClick={goToHomePage}>Voltar para a página inicial</Button>
    </div>
  );
};


export default ApplicantPage;