import React from "react";
import { useParams, useHistory } from "react-router";

const TripDetailsAdminPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Trip Details Admin Page</h1>
    </div>
  );
};

export default TripDetailsAdminPage;