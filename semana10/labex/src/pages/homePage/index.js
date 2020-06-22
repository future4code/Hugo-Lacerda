import React from "react";
import { Button, Card } from '@material-ui/core';
import { useParams, useHistory } from "react-router";
import styled from "styled-components";

const CardStyle = styled(Card)`
  &&{
    width: 800px;
    padding: 50px;
    margin: 50px auto;
    h1{
      text-align: center;
      font-size: 3rem;
    }
    }
`;

const ButtonContainer = styled.div`
margin: 50px auto;
  display: flex;
  justify-content: space-around;
  width: 60%;
  *{
    width: 40%;
  }
`

const HomePage = () => {
  const pathParams = useParams();
  const history = useHistory();

  const goToAdminLoginPage = () => {
    history.push("/admin/login");
  };
  const goToApplicantPage = () => {
    history.push("/applicant_page");
  };

  return (
    <div>
      <CardStyle>
      <h1>LabeX</h1>
      <ButtonContainer>
      <Button variant='outlined' color='primary' onClick={goToApplicantPage}>Sou candidato</Button>
      <Button variant='outlined' color='secondary' onClick={goToAdminLoginPage}>Sou administrador</Button>
      </ButtonContainer>
      </CardStyle>
    </div>
  );
};

export default HomePage;