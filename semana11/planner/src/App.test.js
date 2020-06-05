import React from "react";
import { render, fireEvent, wait, within } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { ExpansionPanelActions } from "@material-ui/core";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

const addTask = () => {
  const utils = <App />;

  const input = utils.getByLabelText("Nova tarefa");

  fireEvent.change(input, { target: { value: "Fazer tarefaTeste" } });

  userEvent.selectOptions(getByLabelText(/Filtro/), getByText(/Domingo/));

  const addButton = utils.getByText(/Adicionar/);

  fireEvent.click(addButton);

  return utils;
};

describe("Renderização inicial", () => {
  test("Renderiza tudo OK", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Comer abacate",
          day: "Quinta",
          id: "BKqaSwCyIDzTfjWgXYFB",
        },
        {
          text: "Jogar Hollow Knight",
          day: "Domingo",
          id: "FDrHUye7p6r2lZleD3Yj",
        },
        {
          text: "Estudar Data Science",
          day: "Quarta",
          id: "HfwiqYQkaGVNU5IHemF1",
        },
        {
          day: "Segunda",
          text: "Fazer exercícios",
          id: "ILN9iLTqZie7D38aupO0",
        },
        {
          day: "Sexta",
          text: "Escutar Foro de Teresina",
          id: "PrY7Ti4vnW6071hEHuXb",
        },
        {
          day: "Terça",
          text: "Lavar roupas",
          id: "d1sMcOJ0I4Or0p5ONiab",
        },
        {
          day: "Segunda",
          text: "Comer bem",
          id: "nW7Zx1ObR72wGX0HEMpH",
        },
      ],
    });
    const {
      getByPlaceholderText,
      getByLabelText,
      findByText,
      getByText,
    } = render(<App />);

    const input = getByPlaceholderText("Nova tarefa");
    expect(input).toBeInTheDocument();
    expect(getByText(/Adicionar/)).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalled();

    const task = await findByText("Jogar Hollow Knight");

    expect(task).toBeInTheDocument();
  });
});

describe("As tarefas estão sendo renderizadas de acordo com o dia OK", () => {
  test("Renderização de acordo com o dia", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Comer abacate",
          day: "Quinta",
          id: "BKqaSwCyIDzTfjWgXYFB",
        },
        {
          text: "Jogar Hollow Knight",
          day: "Domingo",
          id: "FDrHUye7p6r2lZleD3Yj",
        },
        {
          text: "Estudar Data Science",
          day: "Quarta",
          id: "HfwiqYQkaGVNU5IHemF1",
        },
        {
          day: "Segunda",
          text: "Fazer exercícios",
          id: "ILN9iLTqZie7D38aupO0",
        },
        {
          day: "Sexta",
          text: "Escutar Foro de Teresina",
          id: "PrY7Ti4vnW6071hEHuXb",
        },
        {
          day: "Terça",
          text: "Lavar roupas",
          id: "d1sMcOJ0I4Or0p5ONiab",
        },
        {
          day: "Segunda",
          text: "Comer bem",
          id: "nW7Zx1ObR72wGX0HEMpH",
        },
      ],
    });
    const {
      getByPlaceholderText,
      getAllByTestId,
      findByText,
      getByText,
    } = render(<App />);

    expect(axios.get).toHaveBeenCalled();

    await wait(() => {
      expect(getAllByTestId("monday-task")).toHaveLength(2);
    });
  });
});
describe("Criar tarefa OK", () => {
  test("A tarefa é criada e renderizada no local correto", async () => {
    jest.setTimeout(30000);

    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          text: "Estudar Data Science",
          day: "Segunda",
          id: "HfwiqYQkaGVNU5IHemF1",
        },
      ],
    });

    axios.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getAllByTestId,
      getByLabelText,
      getByRole,
      getAllByRole,
    } = render(<App />);

    const input = getByPlaceholderText("Nova tarefa");

    await userEvent.type(input, "Lavar louçaTeste");

    expect(input).toHaveValue("Lavar louçaTeste");

    fireEvent.mouseDown(getByRole("button", { name: "Dia da semana" }));

    await wait(() => {
      var listbox = within(getByRole("listbox"));
      fireEvent.click(listbox.getByText(/Segunda/i));
    });

    expect(getByRole("button", { name: "Dia da semana" })).toHaveTextContent(/Segunda/i);

    const addButton = getByText(/Adicionar/);

    fireEvent.click(addButton);

    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-hugo`,
        {
          text: "Lavar louçaTeste",
          day: "Segunda",
        }
      )
    );

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(3));
    await wait(() => expect(input).toHaveValue(""));
  });
});
