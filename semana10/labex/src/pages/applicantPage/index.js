import React from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core'
import UserNav from '../../NavBars/UserNav'
import TripList from "./TripList"


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
      <UserNav/>
      <TripList/>
    </div>
  );
};


export default ApplicantPage;