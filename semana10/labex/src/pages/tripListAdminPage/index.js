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
  const goToCreateTripPage = () => {
    history.push("/admin/create_trip");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [ history ]);
  const handleLogout = () =>{
    window.localStorage.clear();
  }

  return (
    <div>
      <AdminNav/>
      <h1>Trip List Admin Page</h1>
      <Button variant='outlined' color='secondary' onClick={goToCreateTripPage}>Criar viagem</Button>
      <Button variant='outlined' color='secondary' onClick={goToDetailsPage}>Ver detalhes</Button>
      <Button variant='contained' onClick={goToAdminLoginPage}>Voltar para a página admin login</Button>
      <Button variant='contained' onClick={handleLogout}>Logout</Button>
      <TripList/>
    </div>
  );
};

export default TripListAdminPage;