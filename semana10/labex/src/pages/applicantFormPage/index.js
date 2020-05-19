import React from "react";
import { useParams, useHistory } from "react-router";

const ApplicantFormPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Applicant Form Page</h1>
    </div>
  );
};

export default ApplicantFormPage;