import React from "react"
import styled from "styled-components"
import { Button, Card } from "@material-ui/core"

const StyledCard = styled(Card)`
&&{
    background-color: blueviolet;
    width: 100vw;
    border-radius: 0;
    display: flex;
    justify-content: flex-end;
    Button{
        color: white;
        padding: 20px 40px;
    }
}
`

const LogoutButton = styled(Button)`
&&{
    background-color: rgb(220,20,60,0.5);
    width: 5%;
    margin-left: 7.5%;
    :hover{
        background-color: rgb(220,20,60,0.9);
        font-weight: bold;
    }
}
`
const RegularButton = styled(Button)`
&&{
    background-color: rgb(220,20,60,0.5);
    width: 5%;
    margin-left: 7.5%;
}
`




const AdminNav = () =>{

    return(
        <StyledCard>
        <Button>Visualizar viagens</Button>
        <Button>Adicionar viagem</Button>
        <LogoutButton>Sair</LogoutButton>
        </StyledCard>
    )
}

export default AdminNav;