import React from "react";
import { useParams, useHistory } from "react-router";
import ApplicantForm from "./ApplicantForm"
const ApplicantFormPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Applicant Form Page</h1>
      <ApplicantForm/>
    </div>
  );
};

export default ApplicantFormPage;