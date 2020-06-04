import React, { useState, useEffect } from "react";
import {
  Fab,
  TextField,
  Card,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import axios from "axios";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin-top: 20px;
`;
const StyledFormControl = styled(FormControl)`
  && {
    width: 200px;
    margin: 0 10px;
  }
`;

const WeekDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  max-width: 100vw;
  margin: 30px 10px;
  grid-gap: 10px;
`;
const DayCard = styled(Card)`
  min-height: 250px;
  padding: 10px 20px;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [day, setDay] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-hugo`
      )
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTasks();
  }, [tasks]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSelect = (e) => {
    setDay(e.target.value);
  };
  const onAddTask = () => {
    if (inputValue !== "" && day !== "") {
      const body = {
        text: inputValue,
        day: day,
      };

      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-hugo`,
          body
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      setInputValue("");
      setDay("");
    }
    getTasks();
  };
  return (
    <div>
      <InputContainer>
        <TextField
          label="Nova tarefa"
          onChange={handleInput}
          value={inputValue}
        />
        <StyledFormControl>
          <InputLabel id="day-select-label">Dia da semana</InputLabel>
          <Select
            labelId="day-select-label"
            id="day-select"
            value={day}
            onChange={handleSelect}
          >
            <MenuItem value="Segunda">Segunda</MenuItem>
            <MenuItem value="Terça">Terça</MenuItem>
            <MenuItem value="Quarta">Quarta</MenuItem>
            <MenuItem value="Quinta">Quinta</MenuItem>
            <MenuItem value="Sexta">Sexta</MenuItem>
            <MenuItem value="Sábado">Sábado</MenuItem>
            <MenuItem value="Domingo">Domingo</MenuItem>
          </Select>
        </StyledFormControl>
        <Fab variant="extended" size="small" onClick={onAddTask}>
          <AddIcon />
        </Fab>
      </InputContainer>
      <WeekDaysContainer>
        <DayCard>
          <Typography variant="h5">Segunda</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Segunda";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}
        </DayCard>
        <DayCard>
          <Typography variant="h5">Terça</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Terça";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}

        </DayCard>
        <DayCard>
          <Typography variant="h5">Quarta</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Quarta";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}

        </DayCard>
        <DayCard>
          <Typography variant="h5">Quinta</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Quinta";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}
        </DayCard>
        <DayCard>
          <Typography variant="h5">Sexta</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Sexta";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}
        </DayCard>
        <DayCard>
          <Typography variant="h5">Sábado</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Sábado";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}
        </DayCard>
        <DayCard>
          <Typography variant="h5">Domingo</Typography>
          {tasks
            .filter((task) => {
              return task.day === "Domingo";
            })
            .map((task) => (
              <p>{task.text}</p>
            ))}

        </DayCard>
      </WeekDaysContainer>
    </div>
  );
}

export default App;
