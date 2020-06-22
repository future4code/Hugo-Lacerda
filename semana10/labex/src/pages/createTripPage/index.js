import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core'
import TripForm from './TripForm'
import AdminNav from "../../NavBars/AdminNav";

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
      <AdminNav/>
      <TripForm/>
    </div>
  );
};

export default CreateTripPage;