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
      <LoginForm/>
    </div>
  );
};

export default AdminLoginPage;