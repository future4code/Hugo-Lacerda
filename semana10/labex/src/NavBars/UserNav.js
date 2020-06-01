import React from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Card } from "@material-ui/core";

const StyledCard = styled(Card)`
  && {
    background-color: coral;
    max-width: 100vw;
    border-radius: 0;
    display: flex;
    justify-content: flex-end;
    Button {
      color: white;
      border-radius: 0;
      padding: 20px 40px;
    }
    margin-bottom: 30px;
  }
`;
const HomeButton = styled(Button)`
  && {
    width: 5%;
    margin-left: 7.5%;
    :hover {
      font-weight: bold;
    }
  }
`;
const RegularButton = styled(Button)`
  && {
    border-right: 0;
  }
`;
const UserNav = () => {
  const pathParams = useParams();
  const history = useHistory();


  const goToTripListApplicantPage = () => {
    history.push("/applicant_page");
  };
  const goToApplicantFormPage = () => {
    history.push("/applicant_page/form");
  };
  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <StyledCard>
      <RegularButton variant="outlined" onClick={goToTripListApplicantPage}>
        Visualizar viagens
      </RegularButton>
      <Button variant="outlined" onClick={goToApplicantFormPage}>
        Inscrição
      </Button>
      <HomeButton onClick={goToHomePage}>Home</HomeButton>
    </StyledCard>
  );
};

export default UserNav;
