import React from "react";
import { useParams, useHistory } from "react-router";
import ApplicantForm from "./ApplicantForm"
import UserNav from "../../NavBars/UserNav"
const ApplicantFormPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <div>
      <UserNav/>
      <ApplicantForm/>
    </div>
  );
};

export default ApplicantFormPage;