import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core'

const CreateTripPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToAdminLoginPage = () => {
    history.push("/admin/login");
  };
  const goToTripListAdminPage = () => {
    history.push("/admin/trip_list");
  };

  return (
    <div>
      <h1>Create Trip Page</h1>
      <Button variant='outlined' color='secondary' onClick={goToTripListAdminPage}>Ver lista</Button>
      <Button variant='contained' onClick={goToAdminLoginPage}>Voltar para a página admin login</Button>
    </div>
  );
};

export default CreateTripPage;