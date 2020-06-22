import React, {useEffect} from "react";
import { useParams, useHistory } from "react-router";
import { Button } from '@material-ui/core'
import TripList from "./TripList"
import AdminNav from "../../NavBars/AdminNav";

const TripListAdminPage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToDetailsPage = () => {
    history.push("/admin/trip_list/viagem");
  };

  const goToAdminLoginPage = () => {
    history.push("/admin/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/admin/login");
    }
  }, [ history ]);

  return (
    <div>
      <AdminNav/>
      
      <TripList/>
    </div>
  );
};

export default TripListAdminPage;