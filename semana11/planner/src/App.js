import React, {useState, useEffect} from "react";
import { Fab, TextField, Card, Typography, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";

const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 100vw;
margin-top: 20px;
`
const StyledFormControl = styled(FormControl)`
&&{
  width: 200px;
  margin: 0 10px;
}
`

const WeekDaysContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
max-width: 100vw;
margin: 30px 10px;
grid-gap: 10px;
`
const DayCard = styled(Card)`
min-height: 250px;
padding: 10px 20px;
`

function App() {

  const [inputValue, setInputValue] = useState('');
  const [day, setDay] = useState('');

  const handleInput = (e) =>{
    setInputValue(e.target.value);
  }
  const handleSelect = (e) =>{
    setDay(e.target.value);
  }

  return (
    <div>
      <InputContainer>
        <TextField label='Nova tarefa' onChange={handleInput} value={inputValue}/>
        <StyledFormControl>
        <InputLabel id="day-select-label">Dia da semana</InputLabel>
        <Select
          labelId="day-select-label"
          id="day-select"
          value={day}
          onChange={handleSelect}
        >
          <MenuItem value='Segunda'>Segunda</MenuItem>
          <MenuItem value='Terça'>Terça</MenuItem>
          <MenuItem value='Quarta'>Quarta</MenuItem>
          <MenuItem value='Quinta'>Quinta</MenuItem>
          <MenuItem value='Sexta'>Sexta</MenuItem>
          <MenuItem value='Sábado'>Sábado</MenuItem>
          <MenuItem value='Domingo'>Domingo</MenuItem>
        </Select>
        </StyledFormControl>
        <Fab variant="extended" size='small'><AddIcon/></Fab>
      </InputContainer>
      <WeekDaysContainer>
      <DayCard>
        <Typography>Segunda</Typography>
      </DayCard>
      <DayCard>
        <Typography>Terça</Typography>
      </DayCard>
      <DayCard>
        <Typography>Quarta</Typography>
      </DayCard>
      <DayCard>
        <Typography>Quinta</Typography>
      </DayCard>
      <DayCard>
        <Typography>Sexta</Typography>
      </DayCard>
      <DayCard>
        <Typography>Sábado</Typography>
      </DayCard>
      <DayCard>
        <Typography>Domingo</Typography>
      </DayCard>
      </WeekDaysContainer>
    </div>
  );
}

export default App;
