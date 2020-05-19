import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../pages/homePage'

import AdminLoginPage from '../pages/adminLoginPage'
import CreateTripPage from '../pages/createTripPage'
import TripDetailsAdminPage from '../pages/tripDetailsAdminPage'
import TripListAdminPage from '../pages/tripListAdminPage'

import ApplicantPage from '../pages/applicantPage'
import ApplicantFormPage from '../pages/applicantFormPage'
import TripDetailsApplicantPage from '../pages/tripDetailsApplicantPage'
import TripListApplicantPage from "../pages/tripListApplicantPage";

export default function RouterHandler() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin/login" exact component={AdminLoginPage} />
          <Route path="/admin/create_trip" exact component={CreateTripPage} />
          <Route path="/admin/trip_list" exact component={TripListAdminPage} />
          <Route path="/admin/trip_list/:id" exact component={TripDetailsAdminPage} />
          <Route path="/applicant_page" exact component={ApplicantPage} />
          <Route path="/applicant_page/form" exact component={ApplicantFormPage} />
          <Route path="/applicant_page/trip_list" exact component={TripListApplicantPage} />
          <Route path="/applicant_page/trip_list:id" exact component={TripDetailsApplicantPage} />
        </Switch>
      </div>
    </Router>
  );
}
