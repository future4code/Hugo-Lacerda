import React from "react";
import { useParams, useHistory } from "react-router";

const TripListApplicantPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Trip List Applicant Page</h1>
    </div>
  );
};

export default TripListApplicantPage;